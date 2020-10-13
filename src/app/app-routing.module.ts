import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent} from './about/about.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { PayPageComponent } from './pay-page/pay-page.component';
import { ContactComponent} from './contact/contact.component';
import { DisplayBookingComponent } from './display-booking/display-booking.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'book', component: BookComponent },
  { path: 'display-booking', component: DisplayBookingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pay-page', component: PayPageComponent },
  
  { path: 'contact', component: ContactComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
