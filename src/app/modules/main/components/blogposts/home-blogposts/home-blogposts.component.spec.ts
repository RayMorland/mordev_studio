import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlogpostsComponent } from './home-blogposts.component';

describe('HomeBlogpostsComponent', () => {
  let component: HomeBlogpostsComponent;
  let fixture: ComponentFixture<HomeBlogpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBlogpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlogpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
