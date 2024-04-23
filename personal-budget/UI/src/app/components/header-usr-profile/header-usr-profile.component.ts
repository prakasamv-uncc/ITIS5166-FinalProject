import { Component } from '@angular/core';

@Component({
  selector: 'app-header-usr-profile',
  templateUrl: './header-usr-profile.component.html',
  styleUrl: './header-usr-profile.component.scss'
})
export class HeaderUsrProfileComponent {
 // public method
 profile = [
  {
    icon: 'ti ti-edit-circle',
    title: 'Edit Profile'
  },
  {
    icon: 'ti ti-user',
    title: 'View Profile'
  },
  {
    icon: 'ti ti-power',
    title: 'Logout'
  }
];

setting = [
  {
    icon: 'ti ti-building-bank',
    title: 'Add Income'
  },
  {
    icon: 'ti ti-businessplan',
    title: 'Add Budget'
  },
  {
    icon: 'ti ti-cash',
    title: 'Add Expense'
  }
];
}
