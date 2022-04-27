import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassPracticeComponent } from './ng-class-practice.component';

describe('NgClassPracticeComponent', () => {
  let component: NgClassPracticeComponent;
  let fixture: ComponentFixture<NgClassPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
