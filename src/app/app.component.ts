import { Component, Input } from '@angular/core';
import { Post } from './post-list-item-component/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgBlogApp';
  @Input()
  posts = [
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
}
