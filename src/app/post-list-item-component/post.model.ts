import { Input } from '@angular/core';

export class Post {
  constructor(
    public title: string,
    public content: string,
    public loveIts: number,
    public createdAt: Date
  ) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdAt = createdAt;
  }
}
