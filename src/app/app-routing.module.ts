import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {SecondPageComponent} from '@appComponents/second-page/second-page.component';
import {FirstPageComponent} from '@appComponents/first-page/first-page.component';
import {ThirdPageComponent} from '@appComponents/third-page/third-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  {
    path: 'first',
    component: FirstPageComponent
  },
  {
    path: 'second',
    component: SecondPageComponent
  },
  {
    path: 'third',
    component: ThirdPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
