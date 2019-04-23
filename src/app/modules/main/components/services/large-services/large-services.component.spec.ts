import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeServicesComponent } from './large-services.component';

describe('LargeServicesComponent', () => {
  let component: LargeServicesComponent;
  let fixture: ComponentFixture<LargeServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
