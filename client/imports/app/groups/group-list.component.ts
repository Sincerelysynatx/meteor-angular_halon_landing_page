import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';

import 'rxjs/add/operator/map';

import { Groups } from '../../../../both/collections/group.collection';
import { Group } from '../../../../both/models/group.model';
import { Link } from '../../../../both/models/link.model';


//noinspection TypeScriptCheckImport
import template from './group-list.component.html';

@Component({
    selector: 'temp',
    template
})

@InjectUser('user')
export class GroupComponent implements OnInit, OnDestroy {
    groups: Observable<Group[]>;
    groupName: string;
    paramsSub: Subscription;

    constructor(private route: ActivatedRoute) {
        this.groups = Groups.find({"group_id" : "hardware"}).zone(); // if you log this you will see data is returned back.
    }

    ngOnInit(){
        this.paramsSub = this.route.params
            .map(params => params['groupName'])
            .subscribe(groupName => {
                this.groupName = groupName;

                this.groups = Groups.find({"_id" : groupName}).zone();
            });
    }

    ngOnDestroy(){
        this.paramsSub.unsubscribe();
    }

    removeLink(link: Link): void {
        if (Meteor.user()['emails'][0]['address'] != "admin@admin.com")
        {
            alert("Please log in as admin to make changes");
            return
        }
        //Groups.update({"_id": this.groupName}, {"$pull" : {"links" : {"_id": link._id}}});
        Groups.update(this.groupName, {
            $pull : {
                links : {
                    _id: link._id
                }
            }
        });
        //Groups.update({"_id": this.groupName}, {"$set" : {"links" : []}});
    }
}