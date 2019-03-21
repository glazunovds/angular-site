import { Component, OnInit } from '@angular/core';
import {MAIN_PAGE} from '@appComponents/site-data';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  page = MAIN_PAGE;
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "infinite": true,
    "arrows": false,
    "autoplay": true,
    "autoplaySpeed": 10000,
    'pause-on-hover': true
  };
  constructor() {

  }

  ngOnInit() {
  }

}
