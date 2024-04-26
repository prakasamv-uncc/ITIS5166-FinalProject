import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../../services/_services/storage.service';
import { AuthService } from '../../services/_services/auth.service';
import { EventBusService } from '../../services/_shared/event-bus.service';
import { Subscription } from 'rxjs';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TimeoutModalComponent } from '../modal/timeout-modal/timeout-modal.component';
import { AppService } from '../../services/_services/app.service';
import { Keepalive } from '@ng-idle/keepalive';

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
    private idle: Idle,
    private keepalive: Keepalive,
    private cd: ChangeDetectorRef,
    private modalService: NgbModal,
    private appService: AppService
  ) {

   /*  idle.setIdle(5);
    idle.setTimeout(5);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() =>{ this.idleState = 'Started.'
    console.log('Started.');
      cd.detectChanges();
    });

    idle.onTimeout.subscribe(() => {
      const userDetails = this.storageService.getUser();
      if(userDetails) {
     this.appService.setOpenModal(true);
    }
    });

    idle.onIdleEnd.subscribe(() => {this.idleState = 'No longer idle.'
    console.log('No longer idle.');
      cd.detectChanges();
    });
     idle.onIdleStart.subscribe(() => {this.idleState = 'You\'ve gone idle!'}); */
     idle.setIdle(10); // this will be 58*60

     idle.setTimeout(5); //counter time.

     idle.setInterrupts(DEFAULT_INTERRUPTSOURCES); // there are various Interupts

     idle.onIdleEnd.subscribe(() => {
       this.idleState = 'No Longer Idle';
     });// this is the palce to do somthing if user comes back after being idle.

     idle.onTimeout.subscribe(() => {
       this.idleState = 'Timed out!';
       this.timedOut =true;
       this.appService.setOpenModal(true);

     });// this is place for redirect to login page.

     idle.onIdleStart.subscribe(() =>{
       this.idleState = 'You have gone Idle';
     }); // this is place to do somthing when user goes Idle.

     idle.onTimeoutWarning.subscribe((countdown) => {
       this.idleState = 'You will time out in ' + countdown + 'seconds';
     }); // this is the place for alert to notify of the logout

     keepalive.interval(15);

     keepalive.onPing.subscribe(() => {
       //this.lastPing = new Date();
     });

  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started';
    this.timedOut = false;
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
    if (this.storageService.isLoggedIn()) {
      this.setStates();
    }else{
    }
  }

  logout(): void {
    const user = this.storageService.getUser();
    console.log(user);
    this.authService.logout(user?.tokens?.refresh?.token).subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  openModal() {
    this.modalService.open(TimeoutModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        console.log(`Closed with: ${result}`);
      },
      (reason) => {
        console.log(`Dismissed ${this.getDismissReason(reason)}`);
      }
    );
  }

  private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}

  setStates() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
    console.log('Started.');
  }

  ngOnDestroy(): void {
    this.idle.stop();
  }
}
