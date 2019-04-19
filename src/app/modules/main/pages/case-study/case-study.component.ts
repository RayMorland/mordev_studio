import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CaseStudyService } from 'src/app/shared/cases/case-study.service';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {

  @Input() caseStudy: any;

  constructor(
    private route: ActivatedRoute,
    private caseStudyService: CaseStudyService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCaseStudy();
  }

  getCaseStudy(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.caseStudyService.getCaseStudy(id)
      .subscribe(caseStudy => this.caseStudy = caseStudy);
  }

  goBack(): void {
    this.location.back();
  }
}
