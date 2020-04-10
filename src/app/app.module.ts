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
import {CommentResolverService} from './Servise/Resolvers/comment-resolver.service';
import { UserComponent } from './Component/single-componets/Users/user.component';
import { PostComponent } from './Component/single-componets/post/post.component';
import { CommentComponent } from './Component/single-componets/comment/comment.component';


const routes = [
  { path: '', component: HelloComponent},
  { path: 'users', component: AllUsersComponent , resolve: {list: UserResolverService}},
  { path: 'posts', component: AllPostComponent, resolve: {list: PostResolverService}},
  { path: 'comments', component: AllCommentsComponent, resolve: {list: CommentResolverService}}
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
