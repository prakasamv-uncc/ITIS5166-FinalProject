import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomebudgetLinechatComponent } from './incomebudget-linechat.component';

describe('IncomebudgetLinechatComponent', () => {
  let component: IncomebudgetLinechatComponent;
  let fixture: ComponentFixture<IncomebudgetLinechatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomebudgetLinechatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomebudgetLinechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
