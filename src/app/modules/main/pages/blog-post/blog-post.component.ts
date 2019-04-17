import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BlogService } from 'src/app/shared/blog/blog.service';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  @Input() blogpost: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getBlogpost(id)
      .subscribe(blogpost => this.blogpost = blogpost);
  }

  goBack(): void {
    this.location.back();
  }
}
