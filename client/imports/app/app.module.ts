import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { RouterModule } from "@angular/router";
//noinspection TypeScriptCheckImport
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HEADER_DECLARATIONS } from './header';
import { NAVBAR_DECLARATIONS } from './navbar';
import { GROUPS_DECLARATIONS } from './groups';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        AccountsModule,
        MasonryModule
    ],
    declarations: [
        AppComponent,
        ...HEADER_DECLARATIONS,
        ...NAVBAR_DECLARATIONS,
        ...GROUPS_DECLARATIONS,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}