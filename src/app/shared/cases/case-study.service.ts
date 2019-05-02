import { Injectable } from '@angular/core';
import { testCases } from '../testing/test-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaseStudyService {

  constructor() { }

  getCaseStudy(id: string): Observable<any> {
    return of(testCases.find(caseStudy => caseStudy._id === id));
  }

  getCaseStudyBySequence(sequence): Observable<any> {
    return of(testCases.find(caseStudy => caseStudy.sequence === sequence));
  }
}
