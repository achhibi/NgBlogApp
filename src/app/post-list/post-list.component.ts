import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  public postsList: Array<Post>;
  postsSubscription: Subscription;

  public constructor(public postService: PostService) {}

  public ngOnInit(): void {
    this.postsSubscription = this.postService.postsSubject.subscribe(posts => {
      this.postsList = posts;
    });
    this.postService.emitPosts();
  }

  public ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
