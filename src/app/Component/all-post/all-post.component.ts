import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../Models/Post';
import {PostService} from '../../Servise/post.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

 postsList: Post[];

  constructor(private activatedRoute: ActivatedRoute, private  postService: PostService) {
    // get from resolve
     try {
      this.postsList = this.activatedRoute.snapshot.data.list;
     } catch (e) {
     console.log(e);
     }
    // render post of user
     this.activatedRoute.params
        .subscribe(value => {
          if (!!value.id){
            this.postService.getUsersPost(value.id).subscribe(posts => {
              this.postsList = posts;
            });
          }
      });
  }

  ngOnInit(): void {
  }

}
