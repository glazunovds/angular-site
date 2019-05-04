import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactDialogComponent} from '@appComponents/contact-dialog/contact-dialog.component';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './master-dialog.component.html',
  styleUrls: ['./master-dialog.component.css']
})
export class MasterDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(public dialogRef: MatDialogRef<MasterDialogComponent>,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public appSevice: AppService) { }

  public ok(): void {
    this.dialogRef.close();
  }

  public ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      number: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    });
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.form.controls[controlName].hasError(errorName);
  }

  public sendData(): void {
    if (this.form.valid) {
      const data = {
        name: this.form.get('name').value,
        phone: this.form.get('number').value
      };

      this.appSevice
        .sendForm(data)
        .subscribe(
          res => {
            console.log(res);
            let dialogRef1 = this.dialog.open(ContactDialogComponent, {
              width: '500px',
              data: {name: this.form.get('name').value, number: this.form.get('number').value}
            });
            dialogRef1.afterClosed().subscribe(result => {
              this.dialogRef.close();
            });
          }
      );
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
