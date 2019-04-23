import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { testTeam } from '../testing/test-data';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeamMember(id: string): Observable<any> {
    return of(testTeam.find(member => member._id === id));
  }
}
