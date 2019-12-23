import {AfterViewInit, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {MAIN_PAGE} from '@appComponents/site-data';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Meta} from '@angular/platform-browser';

const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
declare const $: any;

const expansion = trigger('expansion', [
  state('collapsed, void', style({height: '0px', visibility: 'hidden'})),
  state('expanded', style({height: '*', visibility: 'visible'})),
  transition('expanded <=> collapsed, void => collapsed',
    animate(EXPANSION_PANEL_ANIMATION_TIMING)),
]);

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
  animations: [expansion]
})
export class FirstPageComponent implements OnInit, AfterViewInit, OnDestroy {
  page = MAIN_PAGE;
  slideConfig = {
    'slidesToShow': 3,
    'slidesToScroll': 1,
    'infinite': false,
    'arrows': false,
    'autoplay': true,
    'autoplaySpeed': 10000,
    'pause-on-hover': true,
    'dots': true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          'slidesToShow': 3,
          'slidesToScroll': 1,
          'infinite': false,
          'arrows': false,
          'autoplay': true,
          'autoplaySpeed': 10000,
          'pause-on-hover': true,
          'dots': true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          'slidesToShow': 2,
          'slidesToScroll': 1,
         'infinite': false,
          'arrows': false,
          'autoplay': true,
          'autoplaySpeed': 10000,
          'pause-on-hover': true,
          'dots': true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          'slidesToShow': 1,
          'slidesToScroll': 1,
         'infinite': false,
          'arrows': false,
          'autoplay': true,
          'autoplaySpeed': 10000,
          'pause-on-hover': true,
          'dots': true,
        }
      }
    ]
  };
  public step = 0;
  public listener: any;

  constructor(private meta: Meta, public zone: NgZone) {

  }

  public ngOnInit(): void {
    this.meta.updateTag({name: 'Title', content: 'Сервисный центр «Центр Сервис»', id: 'meta-title'});
    this.meta.updateTag({name: 'Description', content: 'Ремонт крупной, мелкой бытовой техники и электроники в Запорожье', id: 'meta-description'});
  }

  public nextSlide(i): void {
    $('.carousel-'+i).slick('slickNext');
  }

  public prevSlide(i): void {
    $('.carousel-'+i).slick('slickPrev');
  }

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      $('.carousel').slick(this.slideConfig);
    });
    setTimeout(() => {
      $('.parallax').parallax({imageSrc: 'assets/background1.jpg', overScrollFix: true});
    }, 20);
    $(window).trigger('resize').trigger('scroll');
    window.dispatchEvent(new Event('resize'));
    this.listener = setInterval(() => {
      this.onResize();
    }, 5000);
  }

  public ngOnDestroy(): void {
    $('.parallax-mirror').remove();
    if (this.listener) {
      clearInterval(this.listener);
      this.listener = null;
    }
  }

  public setStep(index: number): void {
    this.step = index;
  }

  public onResize(): void {
    const titles: Array<Element> = Array.from(document.getElementsByClassName('card-title'));
    const texts: Array<Element> = Array.from(document.getElementsByClassName('card-text'));
    let maxTitleHeight = 0;
    let maxTextHeight = 0;
    titles.forEach((item: HTMLElement) => maxTitleHeight = item.offsetHeight > maxTitleHeight ? item.offsetHeight : maxTitleHeight);
    titles.forEach((item: HTMLElement) => item.style.height = maxTitleHeight + 'px');

    texts.forEach((item: HTMLElement) => maxTextHeight = item.offsetHeight > maxTextHeight ? item.offsetHeight : maxTextHeight);
    texts.forEach((item: HTMLElement) => item.style.height = maxTextHeight + 'px');
  }

  scrollTop(): void {
    $('html, body').stop().animate({scrollTop:0}, 500, 'swing');
  }
}
