import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { testBlogposts } from '../testing/test-data';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getBlogpost(id: string): Observable<any> {
    return of(testBlogposts.find(blogpost => blogpost._id === id));
  }
}
