import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meteor } from 'meteor/meteor';

import { Links } from '../../../../both/collections/links.collection';

//noinspection TypeScriptCheckImport
import template from './links-form.component.html';

@Component({
    selector: 'links-form',
    template
})
@InjectUser('user')
export class LinksFormComponent implements OnInit {
    addForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ){}

    ngOnInit(){
        this.addForm = this.formBuilder.group({
            url: ['', Validators.required],
            title: ['', Validators.required],
            desc: ['', Validators.required]
        });
    }

    addLink(): void {
        /*
        if (Meteor.user()['emails'][0]['address'] != "admin@admin.com")
        {
            alert("Please log in as admin to make changes");
            return;
        }
        */

        if (this.addForm.valid) {
            //noinspection TypeScriptUnresolvedFunction
            Links.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId() }));
            this.addForm.reset();
        }
    }
}