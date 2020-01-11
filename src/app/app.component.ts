import { PostService } from './services/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgBlogApp';
  @Input()
  posts = [];
  postsSubscription: Subscription;
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }
}
