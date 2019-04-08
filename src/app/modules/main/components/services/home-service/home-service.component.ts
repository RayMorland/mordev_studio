import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.scss']
})
export class HomeServiceComponent implements OnInit {
  @Input() service: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  setStyles() {
    let styles = {
      'background-image': 'url(' + this.service.image + ')',
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
