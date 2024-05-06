
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { AuthService } from '../../../services/_services/auth.service';
import { StorageService } from '../../../services/_services/storage.service';
import { Router } from '@angular/router';
import { TimeoutModalComponent } from './timeout-modal.component';

describe('TimeoutModalComponent', () => {
  let component: TimeoutModalComponent;
  let fixture: ComponentFixture<TimeoutModalComponent>;
  let modalService: NgbModal;
  let authService: AuthService;
  let storageService: StorageService;
  let router: Router;
  let mockModalRef: NgbModalRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeoutModalComponent],
      imports: [NgbModalModule],
      providers: [
        { provide: AuthService, useValue: { extendSession: () => of('extended'), logout: () => of('logged out') } },
        { provide: StorageService, useValue: { getUser: () => ({ tokens: { refresh: { token: 'refreshToken' } } }), isLoggedIn: () => true } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeoutModalComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    authService = TestBed.inject(AuthService);
    storageService = TestBed.inject(StorageService);
    router = TestBed.inject(Router);
    mockModalRef = jasmine.createSpyObj('NgbModalRef', ['result', 'dismiss']);

    spyOn(modalService, 'open').and.returnValue(mockModalRef);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should open the modal', () => {
    spyOn(component, 'open').and.callThrough();
    component.open(component.contentMT);
    expect(component.open).toHaveBeenCalled();
    expect(modalService.open).toHaveBeenCalledWith(component.contentMT, { ariaLabelledBy: 'modal-basic-title' });
  });

  it('should extend session on modal close', () => {
    spyOn(authService, 'extendSession').and.returnValue(of('extended'));
    spyOn(storageService, 'updateTokens');
    spyOn(component, 'resetSession');

    component.open(component.contentMT);
    mockModalRef.result.then(() => {
      expect(authService.extendSession).toHaveBeenCalledWith('refreshToken');
      expect(storageService.updateTokens).toHaveBeenCalled();
      expect(component.resetSession).not.toHaveBeenCalled();
    });

    expect(authService.extendSession).toHaveBeenCalledWith('refreshToken');
    expect(storageService.updateTokens).toHaveBeenCalled();
    expect(component.resetSession).not.toHaveBeenCalled();
  });

  it('should logout on modal dismiss', () => {
    spyOn(authService, 'logout').and.returnValue(of('logged out'));
    spyOn(component, 'resetSession');

    component.open(component.contentMT);
    mockModalRef.dismiss('dismissed');

    expect(authService.logout).toHaveBeenCalledWith('refreshToken');
    expect(component.resetSession).toHaveBeenCalled();
  });

  it('should navigate to home on session reset', () => {
    spyOn(storageService, 'clean');
    spyOn(authService, 'setLoggedIn');
    spyOn(modalService, 'dismissAll');
    spyOn(router, 'navigate');

    component.resetSession();

    expect(storageService.clean).toHaveBeenCalled();
    expect(authService.setLoggedIn).toHaveBeenCalledWith(false);
    expect(modalService.dismissAll).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  }); */
});
