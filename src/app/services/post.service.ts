import { Post } from './../models/post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PostService {
  private posts: Post[] = [
    new Post(
      'Mon premier post',
      'Formation Angular OpenClassroom',
      2,
      new Date('2011/10/22')
    ),
    new Post(
      'Mon deuxième post',
      'Formation Springboot spring-clout OpenClassroom',
      1,
      new Date('2011/10/22 22:00')
    ),
    new Post(
      'Encore un post',
      'Toutes mes formation sur openclassroom',
      0,
      new Date('2011/10/22 15:00')
    )
  ];

  postsSubject = new Subject<Post[]>();

  constructor() {}

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }
  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.emitPosts();
  }

  upVote(index: number) {
    const postToUpvote = this.posts[index];

    postToUpvote.loveIts++;
  }
  downVote(index: number) {
    const postToDownVote = this.posts[index];
    postToDownVote.loveIts--;
  }
  createPost(title: string, content: string) {
    const post = new Post(title, content, 0, new Date());
    this.posts.push(post);
  }
}
