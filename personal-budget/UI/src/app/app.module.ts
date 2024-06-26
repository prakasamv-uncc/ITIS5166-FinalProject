import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { httpInterceptorProviders } from './services/_helpers/http.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {NgIdleModule} from '@ng-idle/core';

import { IncomebudgetLinechatComponent } from './components/charts/incomebudget-linechat/incomebudget-linechat.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderUsrProfileComponent } from './components/header-usr-profile/header-usr-profile.component';
import { NgbAlertModule, NgbDatepickerModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TimeoutModalComponent } from './components/modal/timeout-modal/timeout-modal.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ExpensesByCategoryComponent } from './components/charts/expenses-by-category/expenses-by-category.component';
import { BudgetGridComponent } from './components/grid/budget-grid/budget-grid.component';
import { DefaultDashboardComponent } from './pages/dashboard/views/default-dashboard/default-dashboard.component';
import { UpdateIncomeComponent } from './pages/update-income/update-income.component';
import { JsonPipe } from '@angular/common';
import { WeeklyoverviewComponent } from './components/charts/weeklyoverview/weeklyoverview.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { UpdateBudgetComponent } from './pages/update-budget/update-budget.component';
import { UpdateExpenseComponent } from './pages/update-expense/update-expense.component';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { RegistrationStepperComponent } from './components/registration-stepper/registration-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    IncomebudgetLinechatComponent,
    FooterComponent,
    HeaderUsrProfileComponent,
    TimeoutModalComponent,
    ExpensesByCategoryComponent,
    BudgetGridComponent,
    DefaultDashboardComponent,
    UpdateIncomeComponent,
    WeeklyoverviewComponent,
    UpdateBudgetComponent,
    UpdateExpenseComponent,
    UpdateProfileComponent,
    RegistrationStepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbNavModule,
    NgbModule,
    NgIdleModule.forRoot(),
    NgIdleKeepaliveModule.forRoot(),
    FormsModule,
    NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe,
    NgApexchartsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [httpInterceptorProviders, provideAnimationsAsync(), importProvidersFrom(MatNativeDateModule)],
  bootstrap: [AppComponent]
})
export class AppModule { }
