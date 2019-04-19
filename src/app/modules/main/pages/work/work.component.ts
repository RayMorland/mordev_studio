import { Component, OnInit } from '@angular/core';
import { testCases } from 'src/app/shared/testing/test-data';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  caseStudies = testCases;

  constructor() { }

  ngOnInit() {
  }

}
