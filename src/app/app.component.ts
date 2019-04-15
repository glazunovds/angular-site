import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {DETAILS_PAGE} from '@appComponents/site-data';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,  public service: AppService) {
  }

  public ngOnInit(): void {
    this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        this.service.$currentRoute.next(res);
      }
    });
  }
}
