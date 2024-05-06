import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileComponent} from './update-profile.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('UpdateProfileComponent', () => {
  let component: UpdateProfileComponent;
  let fixture: ComponentFixture<UpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [UpdateProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
