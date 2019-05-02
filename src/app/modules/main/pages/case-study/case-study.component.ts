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

  currentCaseStudy: any;
  nextCaseStudy: any;

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
      .subscribe(caseStudy => {
        this.caseStudy = caseStudy;
        if (this.caseStudy.featured) {
          this.currentCaseStudy = this.caseStudy.sequence;
          this.getNextCaseStudy();
        }
      });
  }

  getNextCaseStudy(): void {
    let next = 0;
    if (this.currentCaseStudy === 4) {
      next = 1;
    } else {
      next++;
    }
    this.caseStudyService.getCaseStudyBySequence(next)
    .subscribe(caseStudy => this.nextCaseStudy = caseStudy);
  }

  goBack(): void {
    this.location.back();
  }

  setStyles() {
    const styles = {
      'background-image': 'url(' + this.caseStudy.image + ')',
      'background-position': 'center',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
    };
    return styles;
  }
}
