import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public $currentRoute: Subject<any> = new Subject<any>();
  constructor(public http: HttpClient) { }

  public sendForm(data: any): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post('https://centerservice.com.ua/mail.php', {body: data}, {responseType: 'text'});
  }
}
