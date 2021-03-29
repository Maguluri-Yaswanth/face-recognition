import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentpageComponent} from './contentpage/contentpage.component';


const routes: Routes = [
  {path:'', component:ContentpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
