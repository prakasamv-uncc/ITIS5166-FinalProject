import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../_shared/constants';

@Injectable({
  providedIn: 'root'
})
export class IncompleteOnboardingService {
  httpOptions: any
  private isOnboardingComplete = new BehaviorSubject<boolean>(false);


  constructor(private http: HttpClient, private storageService:StorageService) {
    const user = this.storageService.getUser();
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'authorization':'Bearer '+ user?.tokens?.access?.token})
    };
  }

  isOnboardingComplete$ = this.isOnboardingComplete.asObservable();

  setOnboardingComplete(isComplete: boolean) {
    this.isOnboardingComplete.next(isComplete);
  }

  getIncompleteOnboarding(): Observable<any> {
    return this.http.get(Constants.GET_INCOMPLETE_ONBOARDING_API, this.httpOptions);
  }
}
