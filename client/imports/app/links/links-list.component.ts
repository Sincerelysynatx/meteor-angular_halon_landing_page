import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';

import 'rxjs/add/operator/map';

import { Groups } from '../../../../both/collections/group.collection';
import { Group } from '../../../../both/models/group.model';
import { Links } from '../../../../both/collections/links.collection';
import { Link } from '../../../../both/models/link.model';

//noinspection TypeScriptCheckImport
import template from './links-list.component.html';

@Component({
    selector: 'link-list',
    template
})

@InjectUser('user')
export class LinksListComponent implements OnInit, OnDestroy {
    links: Observable<Link[]>;
    groups: Observable<Group[]>;
    groupName: string;
    paramsSub: Subscription;

    constructor(private route: ActivatedRoute) {

        this.links = Links.find({}).zone();
        this.groups = Groups.find({}).zone();
        console.log("Groups Observable in link-list component", this.groups); // Looking in the console log and you'll see there is no data in the observable
        console.log("Links Observable", this.links); // There is data within this observable
    }

    ngOnInit(){
        this.paramsSub = this.route.params
            .map(params => params['groupName'])
            .subscribe(groupName => this.groupName = groupName);
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
        Links.remove(link._id);
    }

}
