import { Component, OnInit } from '@angular/core';
import { testServices } from 'src/app/shared/testing/test-data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services = testServices;

  constructor() { }

  ngOnInit() {
  }

}
