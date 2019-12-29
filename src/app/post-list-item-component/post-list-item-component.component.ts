import { Component, OnInit, Input } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input()
  postItem: Post;

  constructor() {}

  ngOnInit() {}

  upVote() {
    this.postItem.loveIts++;
  }
  downVote() {
    this.postItem.loveIts--;
  }
}
