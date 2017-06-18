import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
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

const networkInterface = createNetworkInterface('https://43skynpam2.execute-api.us-east-1.amazonaws.com/devmarc/graphql');

networkInterface.use([{
    applyMiddleware(req, next) {
        if (!req.options.headers) {
            req.options.headers = {
                'x-api-key': 'RaDmGseNJQ1ejKNPyK0MO4BrbUN8aID3a6vu4CcF'
            };  // Create the header object if needed.
        }
        // get the authentication token from local storage if it exists
        req.options.headers.authorization = localStorage.getItem('token') || null;
        next();
    }
}]);

const client = new ApolloClient({
    networkInterface
});

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
        HttpModule,
        ApolloModule.forRoot(provideClient),
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
