import { Routes } from '@angular/router'
import { HomeComponent } from "app/home/home.component";

export const routes: Routes = [
    { path: '', redirectTo: '/Tours', pathMatch: 'full' },
    { path: 'Tours', component: HomeComponent },
    
]