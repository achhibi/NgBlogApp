import { PostService } from '../services/post.service';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input()
  postItem: Post;
  @Input() index: number;

  constructor(private postService: PostService) {}

  ngOnInit() {}

  upVote() {
    this.postService.upVote(this.index);
  }
  downVote() {
    this.postService.downVote(this.index);
  }
  delete() {
    this.postService.deletePost(this.index);
    this.postService.emitPosts();
  }
}
