import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../_shared/constants';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private http: HttpClient) {}

  getIncome(): Observable<any> {
    return this.http.get(Constants.INCOME_API + 'incomes');
  }

  addIncome(income: any): Observable<any> {
    return this.http.post(Constants.INCOME_API  + 'incomes', income, httpOptions);
  }


}
