import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  location = new BehaviorSubject<string>('');
  location$ = this.location.asObservable;

  constructor() { }

  setLocation(value: string) {
    this.location.next(value);
    console.log(this.location);
  }

  getLocation() {
    return this.location.getValue();
  }
}
