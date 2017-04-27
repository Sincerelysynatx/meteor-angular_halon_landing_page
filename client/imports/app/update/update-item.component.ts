import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Link } from '../../../../both/models/link.model';
import { Groups } from '../../../../both/collections/group.collection';
import { Group } from '../../../../both/models/group.model';

//noinspection TypeScriptCheckImport
import template from './update-item.component.html';

@Component({
    selector: 'update',
    template
})

export class UpdateComponent implements OnInit, OnDestroy{

    updateForm: FormGroup;
    paramsSub: Subscription;
    groupId: string;
    linkId: string;
    group: Group;
    links: Array<Link>;
    link: Link;

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router){

    }

    ngOnInit(){
        this.updateForm = this.formBuilder.group({
            url: [''],
            title: [''],
            desc: [''],
            order: ['']
        });

        this.paramsSub = this.route.params
            .map(params => params['groupName'])
            .subscribe(groupName => {
                this.groupId = groupName;
            });

        this.paramsSub = this.route.params
            .map(params => params['linkId'])
            .subscribe(linkId => {
                this.linkId = linkId;
            });

        this.group = Groups.findOne({_id: this.groupId});
        this.links = this.group.links;
        for (link in this.links){
            if (this.links[link]._id == this.linkId)
                this.link = this.links[link];
        }
    }

    ngOnDestroy(){
        this.paramsSub.unsubscribe();
    }

    updateLink(link: Link): void {
        var newUrl = (this.updateForm.value.url == "")? link.url: this.updateForm.value.url;
        var newTitle = (this.updateForm.value.title == "")? link.title: this.updateForm.value.title;
        var newDesc = (this.updateForm.value.desc == "")? link.desc: this.updateForm.value.desc;
        var newOrder = (this.updateForm.value.order == "")? link.order: this.updateForm.value.order;
        Groups.update(this.groupId, {
            $push : {
                links : {
                    url: newUrl,
                    title: newTitle,
                    desc: newDesc,
                    order: newOrder,
                    _id : Random.id()
                }
            }
        });
        Groups.update(this.groupId, {
            $pull : {
                links : {
                    _id: link._id
                }
            }
        });
        this.updateForm.reset();

        this.router.navigate(['/groups/' + this.groupId]);
    }

}