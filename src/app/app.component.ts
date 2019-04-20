import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HeaderService } from './shared/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MordevThree';

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.headerService.setLocation(this.router.url);
      window.scrollTo(0, 0);
    });
  }
}
