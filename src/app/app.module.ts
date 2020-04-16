import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './App/app.component';
import {RouterModule} from '@angular/router';
import { AllUsersComponent } from './Component/all-users/all-users.component';
import { AllPostComponent } from './Component/all-post/all-post.component';
import { AllCommentsComponent } from './Component/all-comments/all-comments.component';
import { HelloComponent } from './Component/hello/hello.component';
import {HttpClientModule} from '@angular/common/http';
import {UserResolverService} from './Servise/Resolvers/user-resolver.service';
import {PostResolverService} from './Servise/Resolvers/post-resolver.service';
import { UserComponent } from './Component/single-componets/Users/user.component';
import { PostComponent } from './Component/single-componets/post/post.component';
import { CommentComponent } from './Component/single-componets/comment/comment.component';
import {CommentsResolverService} from './Servise/Resolvers/comments-resolver.service';


const routes = [
  { path: '', component: HelloComponent},
  {
    path: 'users', component: AllUsersComponent , resolve: {list: UserResolverService}, children: [
      {path: ':id/posts', component : AllPostComponent},
    ]
  },
  { path: 'posts', component: AllPostComponent, resolve: {list: PostResolverService}, children: [
      {path: ':id/comments', component: AllCommentsComponent, resolve: {comments: CommentsResolverService}}
    ]
  },
  { path: 'comments', component: AllCommentsComponent, resolve: {list: CommentsResolverService}}
];

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    AllPostComponent,
    AllCommentsComponent,
    HelloComponent,
    UserComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
