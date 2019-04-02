import {Component, OnInit} from '@angular/core';
import {MAIN_PAGE} from '@appComponents/site-data';
import {animate, state, style, transition, trigger} from '@angular/animations';

const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';

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
export class FirstPageComponent implements OnInit {
  page = MAIN_PAGE;
  slideConfig = {
    'slidesToShow': 3,
    'slidesToScroll': 1,
    'infinite': true,
    'arrows': false,
    'autoplay': true,
    'autoplaySpeed': 10000,
    'pause-on-hover': true,
    'dots': true,
    'setPosition': function (e) {

    }
  };
  public step = 0;

  constructor() {

  }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
