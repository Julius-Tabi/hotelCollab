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
import { AboutComponent } from './about/about.component';
import { banking } from 'src/app/BankingArrayList';
import bankingArray from 'src/app/bankingArray';
import { ContactComponent } from './contact/contact.component';
// <<<<<<< HEAD
// import { DisplayBookingComponent } from './display-booking/display-booking.component';
// =======
// import { ApproveComponent } from './approve/approve.component';
// >>>>>>> 3bd1e80e0121e95e158d5eadaa773e5ce9d0b742


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HomeComponent,
    PayPageComponent,
    AboutComponent,
    ContactComponent,
// <<<<<<< HEAD
//     DisplayBookingComponent,
// =======
//     ApproveComponent,
// >>>>>>> 3bd1e80e0121e95e158d5eadaa773e5ce9d0b742
    
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
