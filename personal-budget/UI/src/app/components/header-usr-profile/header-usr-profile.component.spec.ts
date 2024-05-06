/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';
import { HeaderUsrProfileComponent } from './header-usr-profile.component';
import { StorageService } from '../../services/_services/storage.service';

describe('HeaderUsrProfileComponent', () => {
  let component: HeaderUsrProfileComponent;
  let fixture: ComponentFixture<HeaderUsrProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbNavModule, NgModel],
      declarations: [HeaderUsrProfileComponent],
      providers: [StorageService]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderUsrProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize userName and profile', () => {
    const userData = { user: { name: 'John Doe' } };
    spyOn(component['storageService'], 'getUser').and.returnValue(userData);

    component.ngOnInit();

    expect(component.userName).toBe('John Doe');
    expect(component.profile[1].title).toBe('John Doe');
  });
});
 */
