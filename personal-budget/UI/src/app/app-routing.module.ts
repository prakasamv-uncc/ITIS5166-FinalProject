import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UpdateIncomeComponent } from './pages/update-income/update-income.component';
import { update } from 'cypress/types/lodash';
import { UpdateBudgetComponent } from './pages/update-budget/update-budget.component';
import { UpdateExpenseComponent } from './pages/update-expense/update-expense.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'update-income', component: UpdateIncomeComponent },
  { path: 'update-budget', component: UpdateBudgetComponent },
  { path: 'update-expense', component: UpdateExpenseComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
