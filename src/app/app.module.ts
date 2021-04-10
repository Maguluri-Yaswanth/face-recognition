import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentpageComponent } from './contentpage/contentpage.component';
import { ParticlesModule } from 'angular-particle';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; 
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
