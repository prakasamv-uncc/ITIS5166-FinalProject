import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Constants } from '../../services/_shared/constants';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.scss'
})
export class UpdateProfileComponent {
  public profileForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });
 public passwordForm = this.formBuilder.group({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  states: any = [];
  constructor(private formBuilder: FormBuilder) {
    this.states = Constants.USA_STATES;
  }

  onSubmit(): void {
    /* const currentProfile = {
      "firstName": profileForm.value.firstName,
      "lastName": profileForm.value.lastName,
      "email": profileForm.value.email,
      "phone": profileForm.value.phone,
      "address": profileForm.value.address,
      "city": profileForm.value.city,
      "state": profileForm.value.state,
      "zip": profileForm.value.zip,
      "country": profileForm.value.country
    }
    console.log(currentProfile); */
  }


  ngOnInit(): void {
  }

  onPasswordSubmit(): void {
    /* const currentPassword = {
      "currentPassword": passwordForm.value.currentPassword,
      "newPassword": passwordForm.value.newPassword,
      "confirmPassword": passwordForm.value.confirmPassword
    }
    console.log(currentPassword);*/
  }
}
