import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SubredotComponent } from './subredot/subredot.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from './shared/shared.module';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostItemComponent } from './posts/post-list/post-item/post-item.component';
import { CommentsComponent } from './posts/post-detail/comments/comments.component';
import { CommentListComponent } from './posts/post-detail/comments/comment-list/comment-list.component';
import { CommentItemComponent } from './posts/post-detail/comments/comment-list/comment-item/comment-item.component';
import { CommentReplyItemComponent } from './posts/post-detail/comments/comment-list/comment-item/comment-reply-item/comment-reply-item.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  //{ path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'post', loadChildren: () => import('./posts/post-detail/post-detail.component').then(m => m.PostDetailComponent)},
  { path: 'shopping-list', loadChildren: () => import('./posts/post-detail/comments/comments.component').then(m => m.CommentsComponent)},
  //{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SubredotComponent,
    PostsComponent,
    PostDetailComponent,
    PostListComponent,
    PostItemComponent,
    CommentsComponent,
    CommentListComponent,
    CommentItemComponent,
    CommentReplyItemComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
