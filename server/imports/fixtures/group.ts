import { Groups } from '../../../both/collections/group.collection';
import { Group } from '../../../both/models/group.model';

export function loadGroups(){
    if (Groups.find().cursor.count() === 0){
        const groups = [{
            links: [{
                url: 'http://google.com',
                title: 'Hardware',
                desc: 'A place to google stuff'
            }, {
                url: 'http://yahoo.com',
                title: 'Yahoo',
                desc: 'A place to yahoo stuff'
            }, {
                url: 'http://purple.com',
                title: 'Purple',
                desc: 'A place to purple stuff'
            }]
        }, {
            links: [{
                url: 'http://google.com',
                title: 'Software',
                desc: 'A place to google stuff'
            }, {
                url: 'http://yahoo.com',
                title: 'Yahoo',
                desc: 'A place to yahoo stuff'
            }, {
                url: 'http://purple.com',
                title: 'Purple',
                desc: 'A place to purple stuff'
            }]
        }, {
            links: [{
                url: 'http://google.com',
                title: 'NTL',
                desc: 'A place to google stuff'
            }, {
                url: 'http://yahoo.com',
                title: 'Yahoo',
                desc: 'A place to yahoo stuff'
            }, {
                url: 'http://purple.com',
                title: 'Purple',
                desc: 'A place to purple stuff'
            }]
        }];

        groups.forEach((group: Group) => Groups.insert(group));
    }
}