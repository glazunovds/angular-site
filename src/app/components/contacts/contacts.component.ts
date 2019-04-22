import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ContactDialogComponent} from '@appComponents/contact-dialog/contact-dialog.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public form: FormGroup;

  constructor(public dialog: MatDialog) {
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
      const dialogRef = this.dialog.open(ContactDialogComponent, {
        width: '500px',
        data: {name: this.form.get('name').value, number: this.form.get('number').value}
      });
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }

    /*dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });*/
  }

}
