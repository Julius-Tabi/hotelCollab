import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { PayPageComponent } from './pay-page/pay-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'book', component: BookComponent },
  { path: 'pay-page', component: PayPageComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
