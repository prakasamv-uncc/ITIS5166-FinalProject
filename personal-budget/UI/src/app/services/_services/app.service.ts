import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private openModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  handleTimeLineModal = this.openModal.asObservable();

  constructor() { }

  getOpenModal() {
    return this.openModal.asObservable();
  }

  setOpenModal(value: boolean) {
    this.openModal.next(value);
  }

  saveText(text: string) {
    console.log("Service save text : "  + text);
  }

  saveTitle(title: string) {
    console.log("Service save title : "  + title);
  }
}
