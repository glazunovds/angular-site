import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {SecondPageComponent} from '@appComponents/second-page/second-page.component';
import {FirstPageComponent} from '@appComponents/first-page/first-page.component';
import {ThirdPageComponent} from '@appComponents/third-page/third-page.component';
import {ProductDetailsComponent} from '@appComponents/product-details/product-details.component';
import {AboutComponent} from '@appComponents/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  {
    path: 'first',
    component: FirstPageComponent,
  },
  {
    path: 'third',
    component: ThirdPageComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'repair/:id',
    component: SecondPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
