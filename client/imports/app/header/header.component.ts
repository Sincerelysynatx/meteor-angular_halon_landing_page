import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meteor } from 'meteor/meteor';

//noinspection TypeScriptCheckImport
import template from './header.component.html';

@Component({
    selector: 'header',
    template
})

@InjectUser('user')
export class HeaderComponent implements OnInit{
    loginForm: FormGroup;
    isShowing: boolean;
    error: string;
    constructor(private formBuilder: FormBuilder, private zone: NgZone){
        this.isShowing = false;
    }

    ngOnInit(){
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    showLogin(){
        (this.isShowing)? document.getElementById("signin").className += ' w3-hide' : document.getElementById("signin").className -= " w3-hide";
        this.isShowing = !this.isShowing;
        console.log(this.isShowing);
    }

    login():void {
        if(this.loginForm.valid)
        {
            Meteor.loginWithPassword(this.loginForm.value.username, this.loginForm.value.password, (err) => {
                this.zone.run(() => {
                    if (err) {
                        this.error = err;
                        document.getElementById("error").innerHTML = this.error;
                    } else {
                        this.showLogin();
                        document.getElementById("error").innerHTML = "";
                    }
                });
            });
        }
    }

    logout():void {
        Meteor.logout();
    }
}