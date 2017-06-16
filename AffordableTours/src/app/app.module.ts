import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApolloClient, createNetworkInterface } from "apollo-client";
import { ApolloModule } from "apollo-angular";

import { AppComponent } from './app.component';
import { TopNavigationComponent, MiddleNavigationComponent, UtilityNavigationComponent } from './navigation';
import { BreadcrumbComponent } from './breadcrumb';
import { HomeComponent } from './home';
import { CruisesComponent, RiverCruisesComponent } from './cruises';
import { ResortsComponent } from './resorts';

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
        ResortsComponent
    ],
    imports: [
        BrowserModule,
        ApolloModule.forRoot(provideClient)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
