import { TestBed } from '@angular/core/testing';

import { CaseStudyService } from './case-study.service';

describe('CaseStudyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseStudyService = TestBed.get(CaseStudyService);
    expect(service).toBeTruthy();
  });
});
