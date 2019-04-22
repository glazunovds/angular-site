import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ABOUT} from '@appComponents/site-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {

  public step = 0;

  public page = ABOUT;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      // @ts-ignore
      $('.parallax').parallax({imageSrc: 'assets/background2.jpg', overScrollFix: true});
    }, 20);
    // @ts-ignore
    $(window).trigger('resize').trigger('scroll');
  }

  public setStep(index: number): void {
    this.step = index;
  }

  public ngOnDestroy(): void {
    // @ts-ignore
    $('.parallax-mirror').remove();
  }
}
