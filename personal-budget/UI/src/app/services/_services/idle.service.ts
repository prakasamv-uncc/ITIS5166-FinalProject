import { Injectable } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES, IdleExpiry } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdleService {
  public isIdle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private idle: Idle, private keepalive: Keepalive) {
    this.idle.setIdle(300); // 5 minutes of inactivity
    this.idle.setTimeout(60); // 1 minute countdown before idle
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onIdleEnd.subscribe(() => {
      this.isIdle$.next(false);
    });

    this.idle.onIdleStart.subscribe(() => {
      this.isIdle$.next(true);
    });

    this.idle.onTimeout.subscribe(() => {
      this.logout();
    });

    this.keepalive.interval(15); // Send a keepalive request every 15 seconds
    this.keepalive.onPing.subscribe(() => {
      console.log('Keepalive pinged.');
    });

    this.idle.watch();
  }

  private logout() {
    // Logic for logout, navigate to logout route, etc.
    console.log('Logout due to inactivity.');
  }
}
