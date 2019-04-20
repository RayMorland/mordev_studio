import { Component, OnInit } from '@angular/core';
import { testBlogposts } from '../../../../shared/testing/test-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogposts = testBlogposts;
  firstBlogpost = this.blogposts[0];
  otherBlogposts = this.blogposts.slice(1);

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.blogposts);
  }

  setStyles() {
    const styles = {
      'background-image': 'url(' + this.firstBlogpost.image + ')',
      'background-position': 'center',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
    };
    return styles;
  }

  navigateTo() {
    this.router.navigate(['blog/' + this.firstBlogpost._id]);
  }
}
