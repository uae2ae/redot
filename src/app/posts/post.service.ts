import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];

  constructor() { }

  getPosts(){
    return [...this.posts];
  }
  addPost(title: string, content: string, author: string, subredot: string){
    const newPost = new Post(Math.random().toString(), title, content, new Date(), new Date(), author, 0, [], subredot);
    this.posts.push(newPost);
  }
  deletePost(id: string){
    this.posts = this.posts.filter(post => {
      return post.id !== id;
    });
  }
  updatePost(id: string, title: string, content: string){
    const index = this.posts.findIndex(post => post.id === id);
    const updatedPost = [...this.posts];
    const oldPost = updatedPost[index];
    updatedPost[index] = new Post(oldPost.id, title, content, oldPost.createdDate, new Date(), oldPost.author, oldPost.rating, oldPost.comments, oldPost.subredot);
    this.posts = updatedPost;
  }
  getPost(id: string){
    return {...this.posts.find(post => post.id === id)};
  }
  upvotePost(id: string){
    const index = this.posts.findIndex(post => post.id === id);
    const updatedPost = [...this.posts];
    const oldPost = updatedPost[index];
    updatedPost[index] = new Post(oldPost.id, oldPost.title, oldPost.content, oldPost.createdDate, new Date(), oldPost.author, oldPost.rating + 1, oldPost.comments, oldPost.subredot);
    this.posts = updatedPost;
  }
  downvotePost(id: string){
    const index = this.posts.findIndex(post => post.id === id);
    const updatedPost = [...this.posts];
    const oldPost = updatedPost[index];
    updatedPost[index] = new Post(oldPost.id, oldPost.title, oldPost.content, oldPost.createdDate, new Date(), oldPost.author, oldPost.rating - 1, oldPost.comments, oldPost.subredot);
    this.posts = updatedPost;
  }
  setPosts(posts: Post[]){
    this.posts = posts;
  }
}
