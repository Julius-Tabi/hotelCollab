import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent} from './about/about.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { PayPageComponent } from './pay-page/pay-page.component';
import { ServicesComponent} from './services/services.component';
import { ContactComponent} from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'book', component: BookComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pay-page', component: PayPageComponent },
  { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
