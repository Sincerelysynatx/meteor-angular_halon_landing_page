import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Meteor } from 'meteor/meteor';

import { Links } from '../../../../both/collections/links.collection';
import { Link } from '../../../../both/models/link.model';
import { Groups } from '../../../../both/collections/group.collection';
import { Group } from '../../../../both/models/group.model';

//noinspection TypeScriptCheckImport
import template from './links-list.component.html';

@Component({
    selector: 'link-list',
    template
})
@InjectUser('user')
export class LinksListComponent {
    links: Observable<Link[]>;
    groups: Observable<Group[]>;

    constructor() {
        this.links = Links.find({}).zone();
        this.groups = Groups.find({}).zone();
    }

    removeLink(link: Link): void {
        /*
         if (Meteor.user()['emails'][0]['address'] != "admin@admin.com")
         {
         alert("Please log in as admin to make changes");
         return
         }
         */

        Links.remove(link._id);
    }
}
