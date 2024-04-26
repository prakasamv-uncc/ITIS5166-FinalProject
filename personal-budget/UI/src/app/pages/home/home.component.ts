import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/_services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  content?: string;
  constructor(
    private userService: UserService,

  ) {



  }

}
