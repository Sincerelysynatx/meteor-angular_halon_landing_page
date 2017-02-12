import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsModule } from 'angular2-meteor-accounts-ui'

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LINKS_DECLARATIONS } from './links';
import { HEADER_DECLARATIONS } from './header';
import { NAVBAR_DECLARATIONS } from './navbar';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        AccountsModule
    ],
    declarations: [
        AppComponent,
        ...LINKS_DECLARATIONS,
        ...HEADER_DECLARATIONS,
        ...NAVBAR_DECLARATIONS
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}