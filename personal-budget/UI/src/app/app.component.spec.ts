/* import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DEFAULT_INTERRUPTSOURCES, Idle, IdleExpiry, NgIdleModule } from '@ng-idle/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { StorageService } from './services/_services/storage.service';
import { AppService } from './services/_services/app.service';
import { AuthService } from './services/_services/auth.service';
import { Router } from '@angular/router';
import { IdleService } from './services/_services/idle.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIdleModule, NgbModal, StorageService, AppService, AuthService, Router, IdleExpiry, DEFAULT_INTERRUPTSOURCES],
      declarations: [AppComponent],
      providers: [
        IdleService,
        AppService,
        AuthService,
        NgbModal,
        StorageService,
        Router,
      ],
      schemas: [NO_ERRORS_SCHEMA], // Ignore unknown elements and directives

    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
 */
