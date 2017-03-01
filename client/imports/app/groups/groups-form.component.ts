import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meteor } from 'meteor/meteor';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
//noinspection TypeScriptCheckImport
import { Random } from 'meteor/random';

import { Links } from '../../../../both/collections/links.collection';
import { Groups } from '../../../../both/collections/group.collection';

//noinspection TypeScriptCheckImport
import template from './groups-form.component.html';

@Component({
    selector: 'links-form',
    template
})

@InjectUser('user')
export class GroupsFormComponent implements OnInit {
    addForm: FormGroup;
    groupName: string;
    paramsSub: Subscription;

    constructor(
        private formBuilder: FormBuilder, private route: ActivatedRoute
    ){}

    ngOnInit(){
        this.addForm = this.formBuilder.group({
            url: ['', Validators.required],
            title: ['', Validators.required],
            desc: ['', Validators.required]
        });
        this.paramsSub = this.route.params
            .map(params => params['groupName'])
            .subscribe(groupName => {
                this.groupName = groupName;
            });
    }

    addLink(): void {
        if (Meteor.user()['emails'][0]['address'] != "admin@admin.com")
        {
            alert("Please log in as admin to make changes");
            return;
        }

        if (this.addForm.valid) {
            //noinspection TypeScriptUnresolvedFunction
            var temp = Object.assign({}, this.addForm.value, {_id : Random.id()});
            //noinspection TypeScriptUnresolvedFunction
            Groups.update({"_id" : this.groupName}, {$push : {links : temp}});
            this.addForm.reset();
        }
    }
}