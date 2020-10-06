import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedService } from 'src/app/shared/shared.service';

import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { PayPageComponent } from './pay-page/pay-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HomeComponent,
    PayPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
   providers: [
  SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
