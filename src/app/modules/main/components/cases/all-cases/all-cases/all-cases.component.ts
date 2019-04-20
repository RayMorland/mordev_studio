import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-cases',
  templateUrl: './all-cases.component.html',
  styleUrls: ['./all-cases.component.scss']
})
export class AllCasesComponent implements OnInit {
  @Input() caseStudy: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  setStyles() {
    const styles = {
      'background-image': 'url(' + this.caseStudy.image + ')',
      'background-position': 'center',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
    };
    return styles;
  }

  navigateTo(): void {
    this.router.navigate(['/work/' + this.caseStudy._id]);
  }
}
