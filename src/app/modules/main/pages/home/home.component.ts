import { Component, OnInit } from '@angular/core';
import { testCases, testServices, testBlogposts, testTestimonials } from '../../../../shared/testing/test-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  casesData = testCases;
  servicesData = testServices;
  blogpostData = testBlogposts;
  testimonialData = testTestimonials;

  constructor() { }

  ngOnInit() {
  }

}
