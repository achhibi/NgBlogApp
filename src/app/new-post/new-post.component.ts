import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.postFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
  onSubmit() {
    const title = this.postFormGroup.get('title').value;
    const content = this.postFormGroup.get('content').value;
    this.postService.createPost(title, content);
    this.postService.emitPosts();
    this.router.navigate(['posts']);
  }
}
