import { Component } from '@angular/core';
import { StorageService } from '../../services/_services/storage.service';

@Component({
  selector: 'app-header-usr-profile',
  templateUrl: './header-usr-profile.component.html',
  styleUrl: './header-usr-profile.component.scss'
})
export class HeaderUsrProfileComponent {
 // public method
 userName = '';
 profile = [
  {
    icon: 'ti ti-edit-circle',
    title: 'Edit Profile',
    route: '/edit-profile'
  },
  {
    icon: 'ti ti-user',
    title: 'View Profile',
    route: '/view-profile'
  }
];

setting = [
  {
    icon: 'ti ti-building-bank',
    title: 'Add Income',
    route: '/add-income'
  },
  {
    icon: 'ti ti-businessplan',
    title: 'Add Budget',
    route: '/add-budget'
  },
  {
    icon: 'ti ti-cash',
    title: 'Add Expense',
    route: '/add-expense'
  }
];

constructor(private storageService: StorageService) {

}

ngOnInit() {

  const userData = this.storageService.getUser();
    if(userData?.user){
      this.profile[1].title = userData.user.name;
      this.userName = userData.user.name;}

}
}
