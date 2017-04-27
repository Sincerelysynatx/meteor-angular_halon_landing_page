import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Groups } from '../../../../both/collections/group.collection';
import { Group } from '../../../../both/models/group.model';


//noinspection TypeScriptCheckImport
import template from './navbar.component.html';

@Component({
    selector: 'navbar',
    template
})

@InjectUser('user')
export class NavBarComponent implements OnInit{
    howManyWaysToCutNavBar: string;
    groups: Observable<Group[]>;
    addGroupForm: FormGroup;
    isShowing: boolean;

    constructor(private formBuilder: FormBuilder) {
        this.groups = Groups.find({}).zone();
        this.isShowing = false;
    }

    ngOnInit()
    {
        var temp = Groups.find({}).cursor.count();
        this.addGroupForm = this.formBuilder.group({
           group_title: ['', Validators.required],
           group_id: ['', Validators.required]
        });
    }

    showAddGroup(): void{
        (this.isShowing)? document.getElementById("addGroup").className += ' w3-hide' : document.getElementById("addGroup").className -= " w3-hide";
        this.isShowing = !this.isShowing;
    }

    addGroup():void {
        if (this.addGroupForm.valid)
        {
            Groups.insert({ _id: this.addGroupForm.value.group_id, group_title : this.addGroupForm.value.group_title, links: []});
            this.addGroupForm.reset();
        }
    }

    removeGroup(group: Group): void {
        Groups.remove(group._id);
    }
}