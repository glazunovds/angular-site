import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MasterDialogComponent} from '@appComponents/master-dialog/master-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public year: number = new Date().getFullYear();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public masterDialog(): void {
    const dialogRef = this.dialog.open(MasterDialogComponent, {
      width: '800px',
      data: {}
    });
  }
}
