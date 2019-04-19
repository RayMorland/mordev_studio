import { Component, OnInit } from '@angular/core';
import { testBlogposts } from '../../../../shared/testing/test-data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogposts = testBlogposts;

  constructor() { }

  ngOnInit() {

  }

}
