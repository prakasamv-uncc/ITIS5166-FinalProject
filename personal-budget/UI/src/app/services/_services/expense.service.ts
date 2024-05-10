import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from '../_shared/constants';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  httpOptions: any;
  private newExpenseAdded = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private storageService:StorageService) {
    const user = this.storageService.getUser();
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'authorization':'Bearer '+ user?.tokens?.access?.token})
    };
  }
  isNewExpenseAdded$ = this.newExpenseAdded.asObservable();

  setNewExpenseAdded(isAdded: boolean) {
    this.newExpenseAdded.next(isAdded);
  }

  getExpense(): Observable<any> {
    return this.http.get(Constants.GET_EXPENSE_API, this.httpOptions);
  }

  getExpenseTotalByMonth(range:any): Observable<any> {
    const expense:any = {};
    //expense.user = this.storageService.getUser();
    expense.userId = this.storageService.getUser().user.id;
///getMonthTotalExpense/:year/:month

      return this.http.post(Constants.GET_EXPENSE_TOTAL_BY_MONTH_API+'year='+range.year+'/month='+range.month,expense, this.httpOptions);
    }


    getExpenseByUser(): Observable<any> {
      const user = this.storageService.getUser();

      return this.http.get(Constants.GET_EXPENSE_BY_USER_API+user.user.id, this.httpOptions);
    }
    

  addExpense(expense: any): Observable<any> {
    expense.user = this.storageService.getUser().user.name;
    expense.userId = this.storageService.getUser().user.id;
    expense.key = this.storageService.getUser().tokens.access.token;
    return this.http.post(Constants.CREATE_EXPENSE_API, expense, this.httpOptions);
  }

  updateExpense(expense: any): Observable<any> {
    return this.http.put(Constants.UPDATE_EXPENSE_API + expense.id, expense, this.httpOptions);
  }
  isExpenseAdded(): Observable<any> {
    return this.newExpenseAdded.asObservable();
  }


}
