import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  private sub: any;
  public route: any = '';
  public opened = false;
  public menuItemsAvailable = 0;
  public windowWidth = 0;
  public navItems = [
    {route: '/', name: 'Главная'},
    {route: 'about/', name: 'О сервисе'},
    {route: '/repair/small-repair', name: 'Ремонт мелкой бытовой техники'},
    {route: '/repair/electronic-repair', name: 'Ремонт электроники и ТВ'},
    {route: '/repair/climatic-repair', name: 'Ремонт отопительного и климатического оборудования'},
    {route: '/repair/large-repair', name: 'Ремонт крупной бытовой техники'},
  ];
  public subMenuItems = [];

  constructor(public service: AppService) {
  }

  ngOnInit() {
    this.service.$currentRoute.subscribe(res => {
      this.route = res.url;
    });
  }

  toggleNavBar() {
    this.opened = !this.opened;
  }

  disableNavBar() {
    this.opened = false;
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  onResize(): void {
    const availableWidth = document.getElementsByClassName('navbar')[0].getBoundingClientRect().width - document.getElementsByClassName('navbar-brand')[0].getBoundingClientRect().width;
    let availableSymbols = (availableWidth - 120) / 13;
    let itemsCount = 0;
    const menu = ['Главная', 'О сервисе', 'Ремонт мелкой бытовой техники', 'Ремонт электроники и ТВ', 'Ремонт отопительного и климатического оборудования', 'Ремонт крупной бытовой техники'];
    menu.forEach(item => {
      if (availableSymbols > item.length) {
        availableSymbols -= item.length;
        itemsCount++;
      }
    });
    this.menuItemsAvailable = itemsCount;
    this.subMenuItems = this.navItems.filter((item, index) => index >= itemsCount);
    this.windowWidth = window.outerWidth;
  }

}
