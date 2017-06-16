import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

import { routes } from './app.routes';

import { HideOnMobileDirective } from "./shared";

import { AppComponent } from './app.component';
import { TopNavigationComponent, MiddleNavigationComponent, UtilityNavigationComponent } from './navigation';
import { BreadcrumbComponent } from './breadcrumb';
import { HomeComponent } from './home';
import { CruisesComponent, RiverCruisesComponent } from './cruises';
import { ResortsComponent } from './resorts';
import { MissionStatementsComponent, RatingsAndReviewsComponent, SiteMapComponent, FooterComponent } from './footer';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'https://43skynpam2.execute-api.us-east-1.amazonaws.com/devmarc'
    })
})

export function provideClient(): ApolloClient {
    return client;
}

@NgModule({
    declarations: [
        AppComponent,
        TopNavigationComponent,
        MiddleNavigationComponent,
        UtilityNavigationComponent,
        BreadcrumbComponent,
        HomeComponent,
        CruisesComponent,
        RiverCruisesComponent,
        ResortsComponent,
        RatingsAndReviewsComponent,
        MissionStatementsComponent,
        HideOnMobileDirective,
        FooterComponent,
        SiteMapComponent
    ],
    imports: [
        BrowserModule,
        ApolloModule.forRoot(provideClient),
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
