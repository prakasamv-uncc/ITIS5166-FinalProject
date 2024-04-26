import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  inject,
  ViewChild,
} from '@angular/core';
import { AppService } from '../../../services/_services/app.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/_services/auth.service';
import { StorageService } from '../../../services/_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeout-modal',
  templateUrl: './timeout-modal.component.html',
  styleUrl: './timeout-modal.component.scss',
})
export class TimeoutModalComponent {
  @ViewChild('content')
  contentMT!: TemplateRef<any>;
  private modalService = inject(NgbModal);
  closeResult = '';

  idleState = 'Not started.';
  timedOut = false;
  lastPing: Date | null = null;
  display: any;
  public timerInterval: any;

  constructor(
    public appService: AppService,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.appService.getOpenModal().subscribe((data) => {
      if (data) {
        this.open(this.contentMT);
      } else {
        this.modalService.dismissAll();
      }
    });
  }

  ngOnInit() {}



  open(content: TemplateRef<any>) {

    this.modalService
      .open(this.contentMT, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.authService.extendSession().subscribe({
            next: (res) => {
              console.log(res);
            },
            error: (err) => {
              console.log(err);
            },
          });
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );

      if(this.modalService.hasOpenModals()){
        this.timer(0.3);
      }


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

  saveChangeModal(idmodal: String) {
    console.log('close' + ' : ' + idmodal);

    this.authService.extendSession().subscribe({
      next: (res) => {
        console.log(res);
        this.cancelModal();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  cancelModal() {
    console.log('close' + ' : ');
   const user = this.storageService.getUser();
   console.log(user);

    this.authService.logout(user?.tokens?.refresh?.token).subscribe({
      next: (res) => {
        console.log(res);
        this.storageService.clean();
        this.modalService.dismissAll();

        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  start() {
    this.timer(0.30);
  }
  stop() {
    clearInterval(this.timerInterval);
  }

  timer(minute: any) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = '0';
    let statSec: number = 30;

    const prefix = minute < 10 ? '0' : '';

    this.timerInterval = setInterval(() => {
      seconds-=1;
     /*  if (statSec != 0) statSec--;
      else statSec = 59; */

      if (seconds < 10) {
        textSec = '0' + seconds;
      } else textSec = seconds;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log('finished');
        clearInterval(this.timerInterval);
        this.cancelModal();
      }
    }, 1000);
  }
}
