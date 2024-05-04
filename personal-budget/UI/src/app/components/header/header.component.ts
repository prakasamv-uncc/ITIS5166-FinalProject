import { Component} from '@angular/core';
import { StorageService } from '../../services/_services/storage.service';
import { AuthService } from '../../services/_services/auth.service';
import { EventBusService } from '../../services/_shared/event-bus.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  idleState = 'Not started.';
  timedOut = false;

  eventBusSub?: Subscription;

   // public method
   profile = [
    {
      icon: 'ti ti-edit-circle',
      title: 'Edit Profile'
    },
    {
      icon: 'ti ti-user',
      title: 'View Profile'
    },
    {
      icon: 'ti ti-power',
      title: 'Logout'
    }
  ];

  setting = [
    {
      icon: 'ti ti-building-bank',
      title: 'Add Income'
    },
    {
      icon: 'ti ti-businessplan',
      title: 'Add Budget'
    },
    {
      icon: 'ti ti-cash',
      title: 'Add Expense'
    }
  ];

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router: Router
  ) {


     this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      if (this.isLoggedIn) {
        const user = this.storageService.getUser();
        this.roles = user.roles;
        this.username = user.username;
      }
    }
    );
}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    const user = this.storageService.getUser();
    console.log(user);
    this.authService.logout(user?.tokens?.refresh?.token).subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        this.authService.setLoggedIn(false);
        this.router.navigate(['/login']);
        //window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }



  ngOnDestroy(): void {

  }
}
