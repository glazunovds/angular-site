import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Details, DETAILS_PAGE} from '@appComponents/site-data';
import {ContactDialogComponent} from '@appComponents/contact-dialog/contact-dialog.component';
import {MatDialog} from '@angular/material';
import {MasterDialogComponent} from '@appComponents/master-dialog/master-dialog.component';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  id: string;
  public data: Details;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private cd: ChangeDetectorRef,
              private meta: Meta,
              public dialog: MatDialog) {
    this.meta.updateTag({name: 'Description', content: 'test', id: 'meta-description'});
  }

  public ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.data = DETAILS_PAGE.filter(item => item.route === this.id)[0];
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public masterDialog(): void {
    const dialogRef = this.dialog.open(MasterDialogComponent, {
      width: '800px',
      data: {}
    });
  }

}
