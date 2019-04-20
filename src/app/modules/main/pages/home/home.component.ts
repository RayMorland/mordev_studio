import { Component, OnInit } from '@angular/core';
import { testCases, testServices, testBlogposts, testTestimonials } from '../../../../shared/testing/test-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  casesData = testCases.slice(0, 4);
  servicesData = testServices;
  blogpostData = testBlogposts.slice(0, 2);
  testimonialData = testTestimonials;

  constructor() { }

  ngOnInit() {
  }

}
