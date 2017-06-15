import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApolloClient, createNetworkInterface } from "apollo-client";
import { ApolloModule } from "apollo-angular";

import { AppComponent } from './app.component';

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
        AppComponent
    ],
    imports: [
        BrowserModule,
        ApolloModule.forRoot(provideClient)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
