import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourseInfoComponent } from './single-course-info.component';

describe('SingleCourseInfoComponent', () => {
  let component: SingleCourseInfoComponent;
  let fixture: ComponentFixture<SingleCourseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCourseInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCourseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
