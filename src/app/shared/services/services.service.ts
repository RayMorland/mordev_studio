import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { testServices } from '../testing/test-data';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  getService(id: string): Observable<any> {
    return of(testServices.find(service => service._id === id));
  }
}
