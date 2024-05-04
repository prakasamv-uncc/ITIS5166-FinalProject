import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { AppService } from './services/_services/app.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TimeoutModalComponent } from './components/modal/timeout-modal/timeout-modal.component';
import { StorageService } from './services/_services/storage.service';
import { Keepalive } from '@ng-idle/keepalive';
import { AuthService } from './services/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'UI';
  idleState = 'Not started.';
  timedOut = false;
  private numberOfSeconds: number = 20;
  refreshToken: any;
  constructor(
    private _idle: Idle,
    private appService: AppService,
    private authService: AuthService,
    private modalService: NgbModal,
    private storageService: StorageService,
    private keepalive: Keepalive,
    private router: Router,
  ) {}

  ngOnInit() {
    this._idle.setIdle(this.numberOfSeconds);
    this._idle.setTimeout(this.numberOfSeconds);
    this._idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    this._idle.watch();


    this._idle.onIdleStart.subscribe(() => {
      // show the modal
      console.log('Idle start');
      if (this.storageService.isLoggedIn()) {
        this.refreshToken = this.storageService.getRefreshToken();
        this.appService.setOpenModal(true);
      }
    });
    this._idle.onIdleEnd.subscribe(() => {
      // hide the modal
      this.idleState = 'No longer idle.'
      console.log(this.idleState);
      this.reset();
    });
    this._idle.onTimeoutWarning.subscribe((secondsLeft: number) => {
      // Update the warning message
    });
    this._idle.onTimeout.subscribe(() => {
      // Hide the modal, log out, do something else
      if(this.storageService.isLoggedIn()) {
        this.appService.setOpenModal(false);

        this.authService.logout( this.refreshToken).subscribe((data) => {
          this.storageService.clean();
          this.router.navigate(['/login']);
        });
      }
    });
  }

 /*  openModal() {
    // if(this.authService.isLoggedIn)
    this.modalService
      .open(TimeoutModalComponent, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          console.log(`Closed with: ${result}`);
        },
        (reason) => {
          console.log(`Dismissed ${this.getDismissReason(reason)}`);
        },
      );
  } */

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
    this._idle.watch();
    console.log('Started.');
  }

  reset() {
    this._idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

  ngOnDestroy() {
    this._idle.stop();
  }
}
