import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';


export const router: Routes = [
    
    {path: '', component: BookComponent},
    { path: 'book', component: BookComponent },
    // { path: 'banking-details', component: BankingDetailsComponent },
    // { path: 'display', component: DisplayComponent },
   
];

export const routes: ModuleWithProviders<any> = RouterModule.forRoot(router)