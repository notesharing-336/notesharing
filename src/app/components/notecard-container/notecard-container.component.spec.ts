import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotecardContainerComponent } from './notecard-container.component';

describe('NotecardContainerComponent', () => {
  let component: NotecardContainerComponent;
  let fixture: ComponentFixture<NotecardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotecardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotecardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
