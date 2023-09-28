import { Params } from '@angular/router';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { PostService } from '../posts/post.service';
import { Post } from '../posts/post.model';



@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private postService: PostService) {}

  sendPost(){
    const posts = this.postService.getPosts();
    return this.http.put(
      'https://localhost:4200/api/posts', posts).subscribe(response =>{
        console.log(response);
      });
  }

  fetchPosts(order: string){
    return this.http.get<Post[]>(
      'https://localhost:4200/api/posts',
      {
        params: new HttpParams().set('order', order)
      }
    ).pipe(
      map(posts => {
        return posts.map(post => {
          return {
            ...post,
            comments: post.comments ? post.comments : []
          };
        });
      }),
      tap(posts => {
        this.postService.setPosts(posts);
      })
    );
  }
}

