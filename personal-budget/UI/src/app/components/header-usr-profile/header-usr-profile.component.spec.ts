import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUsrProfileComponent } from './header-usr-profile.component';

describe('HeaderUsrProfileComponent', () => {
  let component: HeaderUsrProfileComponent;
  let fixture: ComponentFixture<HeaderUsrProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderUsrProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderUsrProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
