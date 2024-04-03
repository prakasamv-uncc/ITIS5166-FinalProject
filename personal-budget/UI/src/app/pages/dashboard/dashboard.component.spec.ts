

import { Component } from '@angular/core';
import {
faPen,
faPlus,
faMoneyBill,
faUsers,
faClock,
faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
edit = faPen;
create = faPlus;
budget = faMoneyBill;
project = faUsers;
time = faClock;
work = faBriefcase;
}
