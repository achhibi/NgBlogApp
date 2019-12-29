import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post-list-item-component/Post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input()
  postsList: Post[];

  constructor() {}

  ngOnInit() {}
}
