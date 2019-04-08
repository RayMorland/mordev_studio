import { Component, OnInit } from '@angular/core';
import { testData } from '../../../../shared/testing/test-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  casesData = testData;

  constructor() { }

  ngOnInit() {
  }

}
