import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommentModel} from '../../Models/CommentModel';
import {Observable} from 'rxjs';
import {PostService} from '../post.service';
import {CommentService} from '../comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolverService  implements Resolve<CommentModel[]>{

  constructor(private  commentService: CommentService) { }



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]>  {
    const postId = route.queryParamMap.get('postId');
    // this.commentService.getAllData().subscribe(value => console.log(value));
    return this.commentService.getAllCommentsOfPost(postId);
}


}

