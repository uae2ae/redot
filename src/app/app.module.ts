import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SubredotComponent } from './subredot/subredot.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostItemComponent } from './posts/post-list/post-item/post-item.component';
import { CommentsComponent } from './posts/post-detail/comments/comments.component';
import { CommentListComponent } from './posts/post-detail/comments/comment-list/comment-list.component';
import { CommentItemComponent } from './posts/post-detail/comments/comment-list/comment-item/comment-item.component';
import { CommentReplyItemComponent } from './posts/post-detail/comments/comment-list/comment-item/comment-reply-item/comment-reply-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'subredot', loadChildren: () => import('./subredot/subredot.module').then(m => m.SubredotModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'posts', loadChildren: () => import('./posts/posts.component').then(m => m.PostsComponent)},
  { path: 'post', loadChildren: () => import('./posts/post-detail/post-detail.component').then(m => m.PostDetailComponent)},
  { path: 'comment', loadChildren: () => import('./posts/post-detail/comments/comments.component').then(m => m.CommentsComponent)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
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
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
