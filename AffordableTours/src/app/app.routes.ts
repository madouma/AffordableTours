import { Routes } from '@angular/router'

import { HomeComponent, CruisesComponent, RiverCruisesComponent, ResortsComponent } from './index';

export const routes: Routes = [
    { path: '', redirectTo: 'Tours', pathMatch: 'full' },
    { path: 'Tours', component: HomeComponent },
    { path: 'Cruises', component: CruisesComponent },
    { path: 'River-Cruises', component: RiverCruisesComponent },    
    { path: 'Resorts', component: ResortsComponent }
]