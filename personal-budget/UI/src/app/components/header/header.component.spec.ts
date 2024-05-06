import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { StorageService } from '../../services/_services/storage.service';
import { AuthService } from '../../services/_services/auth.service';
import { EventBusService } from '../../services/_shared/event-bus.service';
import { TimeoutModalComponent } from '../modal/timeout-modal/timeout-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule,HttpClientModule,NgbDatepickerModule,NgbModule],
      declarations: [ HeaderComponent, TimeoutModalComponent],
      providers:[StorageService, AuthService, EventBusService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
