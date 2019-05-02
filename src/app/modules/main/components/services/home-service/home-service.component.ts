import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.scss']
})
export class HomeServiceComponent implements OnInit {
  @Input() service: any;
  infoOpen = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  setStyles() {
    const styles = {
      'background-image': 'url(' + this.service.image + ')',
      'background-position': 'center',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
    };
    return styles;
  }

  openServiceInfo(): void {
    this.infoOpen = !this.infoOpen;
  }

  navigateTo(): void {
    this.router.navigate(['/services/' + this.service._id]);
  }
}
