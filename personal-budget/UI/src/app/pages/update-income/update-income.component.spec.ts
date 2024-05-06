import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIncomeComponent } from './update-income.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IncomeService } from '../../services/_services/income.service';

describe('UpdateIncomeComponent', () => {
  let component: UpdateIncomeComponent;
  let fixture: ComponentFixture<UpdateIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule,HttpClientModule,NgbDatepickerModule,NgbModule],

      declarations: [ UpdateIncomeComponent ],
      providers:[IncomeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect((component) as any).toBeTruthy();
  });
});
