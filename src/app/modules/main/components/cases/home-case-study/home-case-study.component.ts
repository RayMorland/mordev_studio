import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-case-study',
  templateUrl: './home-case-study.component.html',
  styleUrls: ['./home-case-study.component.scss']
})
export class HomeCaseStudyComponent implements OnInit {
  @Input() caseStudy: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  setStyles() {
    let styles = {
      'background-image': 'url(' + this.caseStudy.image + ')',
      'background-position': 'center',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
    }
    return styles;
  }

  navigateTo(): void {
    this.router.navigate(['/work']);
  }
}
