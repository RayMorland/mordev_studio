import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-blogposts',
  templateUrl: './home-blogposts.component.html',
  styleUrls: ['./home-blogposts.component.scss']
})
export class HomeBlogpostsComponent implements OnInit {
  @Input() blogpost: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  setStyles() {
    const styles = {
      'background-image': 'url(' + this.blogpost.image + ')',
      'background-position': 'center',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
    };
    return styles;
  }

  navigateTo(): void {
    this.router.navigate(['/blog/' + this.blogpost._id]);
  }
}
