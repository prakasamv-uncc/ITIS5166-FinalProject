import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from '../_shared/constants';
import { StorageService } from './storage.service';



@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  httpOptions: any
  private newIncomeAdded = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private storageService:StorageService) {
    const user = this.storageService.getUser();
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'authorization':'Bearer '+ user?.tokens?.access?.token})
    };
  }
  isNewIncomeAdded$ = this.newIncomeAdded.asObservable();

  setNewIncomeAdded(isAdded: boolean) {
    this.newIncomeAdded.next(isAdded);
  }

  getIncome(): Observable<any> {
    return this.http.get(Constants.GET_INCOME_API, this.httpOptions);
  }

  getIncomeTotalByMonth(range:any): Observable<any> {
    const income:any = {};
    //income.user = this.storageService.getUser();
    income.userId = this.storageService.getUser().user.id;
///getMonthTotalIncome/:year/:month

    return this.http.post(Constants.GET_INCOME_TOTAL_BY_MONTH_API+'year='+range.year+'/month='+range.month,income, this.httpOptions);
  }

  addIncome(income: any): Observable<any> {
    income.user = this.storageService.getUser().user.name;
    income.userId = this.storageService.getUser().user.id;
    income.key = this.storageService.getUser().tokens.access.token;
    return this.http.post(Constants.INCOME_API, income, this.httpOptions);
  }

  updateIncome(income: any): Observable<any> {
    return this.http.put(Constants.INCOME_API + income.id, income, this.httpOptions);
  }
  isIncomeAdded(): Observable<any> {
    return this.newIncomeAdded.asObservable();
  }

}
