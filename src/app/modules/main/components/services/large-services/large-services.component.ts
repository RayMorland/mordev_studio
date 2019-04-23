import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-large-services',
  templateUrl: './large-services.component.html',
  styleUrls: ['./large-services.component.scss']
})
export class LargeServicesComponent implements OnInit {

  @Input() service: any;

  constructor() { }

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

}
