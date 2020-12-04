import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdashboardComponent } from './topdashboard.component';

describe('TopdashboardComponent', () => {
  let component: TopdashboardComponent;
  let fixture: ComponentFixture<TopdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
