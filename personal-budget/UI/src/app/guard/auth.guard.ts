import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/_services/storage.service';

export const AuthGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot):
Observable<boolean | UrlTree>
| Promise<boolean | UrlTree>
| boolean
| UrlTree=> {

  return inject(StorageService).isLoggedIn()? true : inject(Router).createUrlTree(['/login']);
};
