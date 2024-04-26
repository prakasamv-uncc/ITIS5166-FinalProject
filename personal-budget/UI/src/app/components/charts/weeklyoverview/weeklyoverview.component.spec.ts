import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyoverviewComponent } from './weeklyoverview.component';

describe('WeeklyoverviewComponent', () => {
  let component: WeeklyoverviewComponent;
  let fixture: ComponentFixture<WeeklyoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeeklyoverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
