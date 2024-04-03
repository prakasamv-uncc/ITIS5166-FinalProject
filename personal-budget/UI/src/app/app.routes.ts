import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', title:"Login Page", component: LoginComponent // This is the default route
  },
  {
    path: 'login', title:"Login Page", component: LoginComponent
  },
  {
    path: 'signup', title:"Register Page", component: SignupComponent
  },
  {
    path: 'dashboard', title:"Dashboard" , component:DashboardComponent
  }
];
