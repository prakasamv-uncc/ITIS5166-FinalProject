import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  public clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  public getAccessToken(): string | null {
    const user = this.getUser();
    if (user) {
      return user.tokens.access.token;
    }

    return null;
  }

  public getRefreshToken(): string | null {
    const user = this.getUser();
    if (user) {
      return user.tokens.refresh.token;
    }

    return null;
  }

  public updateTokens(tokens: any): void {
    const user = this.getUser();
    user.tokens = tokens;
    this.saveUser(user);
  }
}
