import {ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public mobileQuery: MediaQueryList;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public fillerNav = this.months;//Array.from({length: 12}, (_, i) => `Nav Item ${i + 1}`);

  public yearsList:any ;
  public generateLastFiveYears(): number[] {
    const currentYear = new Date().getFullYear();
    const lastFiveYears = [];
    for (let i = 0; i < 5; i++) {
      lastFiveYears.push(currentYear - i);
    }
    return lastFiveYears;
  }

  @Input() isExpanded: boolean | undefined;
  @Output() toggleMenu = new EventEmitter();

  public routeLinks = [
    { link: "about", name: "About", icon: "dashboard" },
    { link: "locations", name: "Locations", icon: "account_balance" },
  ];


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 300px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.yearsList = this.generateLastFiveYears();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
}
