import { Component, OnInit } from '@angular/core';
import { testServices, testTeam, testBlogposts } from 'src/app/shared/testing/test-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  services = testServices;
  teamMembers = testTeam;
  blogposts = testBlogposts.slice(0, 2);

  constructor() { }

  ngOnInit() {
  }

}
