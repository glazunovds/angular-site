import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Repair, REPAIR_PAGE} from '@appComponents/site-data';
import {ActivatedRoute} from '@angular/router';
import {MasterDialogComponent} from '@appComponents/master-dialog/master-dialog.component';
import {MatDialog} from '@angular/material';
declare const $: any;

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit, OnDestroy {
  id: string;
  public data: Repair;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private cd: ChangeDetectorRef,
              public dialog: MatDialog) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.data = REPAIR_PAGE.filter(item => item.route === this.id)[0];
    });
  }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  scrollTop(): void {
    $('html, body').stop().animate({scrollTop:0}, 500, 'swing');
  }

  public masterDialog(): void {
    const dialogRef = this.dialog.open(MasterDialogComponent, {
      width: '800px',
      data: {}
    });
  }

}
