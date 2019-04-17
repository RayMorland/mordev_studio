import { Component, OnInit } from '@angular/core';
import { testCases, testServices, testBlogposts } from '../../../../shared/testing/test-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  casesData = testCases;
  servicesData = testServices;
  blogpostData = testBlogposts;

  constructor() { }

  ngOnInit() {
  }

}
