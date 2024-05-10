import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { any } from 'cypress/types/bluebird';
import { Constants } from '../_shared/constants';
//const AUTH_API = 'http://localhost:3000/v1/auth/';
const AUTH_API = Constants.API_URL+Constants.AUTH_API;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', withCredentials: 'true'})
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  setLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn.next(isLoggedIn);
  }



  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        name,
        email,
        password,
      },
      httpOptions
    );
  }

  extendSession(refreshToken:any): Observable<any> {
    return this.http.post(AUTH_API + 'refresh-tokens', { 'refreshToken':refreshToken}, httpOptions);
  }

  logout(refreshToken:any): Observable<any> {
    return this.http.post(AUTH_API + 'logout', {refreshToken }, httpOptions);
  }
}
