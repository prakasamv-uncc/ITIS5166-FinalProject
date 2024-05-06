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
import { AuthGuard } from './guard/auth.guard';
import { RegistrationStepperComponent } from './components/registration-stepper/registration-stepper.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
 /*  { path: 'register', component: RegisterComponent }, */
 { path: 'register', component: RegistrationStepperComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  { path: 'add-income', component: UpdateIncomeComponent , canActivate: [AuthGuard] },
  { path: 'add-budget', component: UpdateBudgetComponent, canActivate: [AuthGuard] },
  { path: 'add-expense', component: UpdateExpenseComponent, canActivate: [AuthGuard] },
  { path: 'update-profile', component: UpdateProfileComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
