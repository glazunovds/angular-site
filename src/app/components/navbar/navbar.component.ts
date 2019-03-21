import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private sub: any;
  public route: any = '';

  constructor(public service: AppService) {
  }

  ngOnInit() {
    this.service.$currentRoute.subscribe(res => {
      this.route = res.url;
    });
  }

  ngOnDestroy() {

  }

}
