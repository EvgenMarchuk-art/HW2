import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../Models/Post';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
 posts: Post[];
  constructor(private activatedRoute: ActivatedRoute) {
   this.posts = this.activatedRoute.snapshot.data.list;

  }

  ngOnInit(): void {
  }

}
