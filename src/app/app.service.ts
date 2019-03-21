import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public $currentRoute: Subject<any> = new Subject<any>();
  constructor() { }
}
