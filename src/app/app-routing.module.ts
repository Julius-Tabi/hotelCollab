import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [ {path: '', component: BookComponent},
  { path: 'book', component: BookComponent },
    // { path: 'banking-details', component: BankingDetailsComponent },
    // { path: 'display', component: DisplayComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
