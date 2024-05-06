import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../services/_services/storage.service';
import { AuthService } from '../../services/_services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule,ReactiveFormsModule,HttpClientModule,NgbDatepickerModule,NgbModule ],
      providers: [StorageService,AuthService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  } );


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
