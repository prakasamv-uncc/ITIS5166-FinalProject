import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../_shared/constants';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
httpOptions: any
private newBudgetAdded = new BehaviorSubject<boolean>(false);
constructor(private http: HttpClient, private storageService:StorageService) {
const user = this.storageService.getUser();
this.httpOptions = {

headers: new HttpHeaders({ 'Content-Type': 'application/json', 'authorization':'Bearer '+ user?.tokens?.access?.token, withCredentials: 'true'})
};
}
isNewBudgetAdded$ = this.newBudgetAdded.asObservable();


setNewBudgetAdded(isAdded: boolean) {
this.newBudgetAdded.next(isAdded);
}

getBudget(): Observable<any> {
return this.http.get(Constants.GET_BUDGET_API, this.httpOptions);
}

getBudgetTotalByMonth(range:any): Observable<any> {
const budget:any = {};
//budget.user = this.storageService.getUser();
budget.userId = this.storageService.getUser().user.id;
///getMonthTotalBudget/:year/:month

return this.http.post(Constants.GET_BUDGET_TOTAL_BY_MONTH_API+'year='+range.year+'/month='+range.month,budget, this.httpOptions);
}

addBudget(budget: any): Observable<any> {
budget.user = this.storageService.getUser().user.name;
budget.userId = this.storageService.getUser().user.id;
budget.key = this.storageService.getUser().tokens.access.token;
return this.http.post(Constants.CREATE_BUDGET_API, budget, this.httpOptions);
}

/* updateBudget(budget: any): Observable<any> {
return this.http.put(Constants.BUDGET_API + budget.id, budget, this.httpOptions);
} */
isBudgetAdded(): Observable<any> {
return this.newBudgetAdded.asObservable();
}

getBudgetByCategory(): Observable<any> {
  const user = this.storageService.getUser();
/*   this.httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'authorization':'Bearer '+ user?.tokens?.access?.token, withCredentials: 'true'})
  }; */
  //const userData = {userId:this.storageService.getUser()};
  const bodyData = { userId: this.storageService.getUser().user.name }; // Replace with your actual data
return this.http.post(Constants.GET_BUDGET_BY_MONTH_API,bodyData, this.httpOptions);
}

getBudgetByMonth(): Observable<any> {
return this.http.get(Constants.GET_BUDGET_BY_MONTH_API, this.httpOptions);
}

  }

