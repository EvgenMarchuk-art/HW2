import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentModel} from '../../Models/CommentModel';


@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    // all comments from resolve
    console.log('list', this.activatedRoute.snapshot.data.list);

    // comment of single postId
    this.activatedRoute.data.subscribe(value => {
      this.comments = value.comments;
    });


  }

  ngOnInit(): void {
  }

}

