import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {SecondPageComponent} from './components/second-page/second-page.component';
import {FirstPageComponent} from './components/first-page/first-page.component';
import {ThirdPageComponent} from './components/third-page/third-page.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {AboutComponent} from './components/about/about.component';
import {AppService} from './app.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {RouteReuseStrategy} from '@angular/router';
import {CustomReuseStrategy} from '@appComponents/custom-router-strategy';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatTooltipModule, MatToolbarModule, MatSidenavModule, MatMenuModule
  ],
  declarations: [
    AppComponent,
    SecondPageComponent,
    FirstPageComponent,
    ThirdPageComponent,
    NavbarComponent,
    ProductDetailsComponent,
    AboutComponent,
  ],
  providers: [AppService, {provide: LocationStrategy, useClass: HashLocationStrategy}, {
    provide: RouteReuseStrategy,
    useClass: CustomReuseStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
