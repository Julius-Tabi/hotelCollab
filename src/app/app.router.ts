import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import {HomeComponent} from './home/home.component'

export const router: Routes = [
    
     {path: '', component: HomeComponent},
    { path: 'book', component: BookComponent },
   
   
];

export const routes: ModuleWithProviders<any> = RouterModule.forRoot(router)