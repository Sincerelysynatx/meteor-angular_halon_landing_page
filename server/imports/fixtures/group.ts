import { Groups } from '../../../both/collections/group.collection';
import { Group } from '../../../both/models/group.model';
//noinspection TypeScriptCheckImport
import { Random } from 'meteor/random';

export function loadGroups(){
    if (Groups.find().cursor.count() === 0){
        const groups = [{
            group_title: "Hardware Links",
            _id: "hardware",
            links: [{
                _id: Random.id(),
                url: 'http://google.com',
                title: 'Hardware',
                desc: 'A place to google stuff'
            }, {
                _id: Random.id(),
                url: 'http://yahoo.com',
                title: 'Yahoo',
                desc: 'A place to yahoo stuff'
            }, {
                _id: Random.id(),
                url: 'http://purple.com',
                title: 'Purple',
                desc: 'A place to purple stuff'
            }]
        }, {
            group_title: "Software Links",
            _id: "software",
            links: [{
                _id: Random.id(),
                url: 'http://google.com',
                title: 'Software',
                desc: 'A place to google stuff'
            }, {
                _id: Random.id(),
                url: 'http://yahoo.com',
                title: 'Yahoo',
                desc: 'A place to yahoo stuff'
            }, {
                _id: Random.id(),
                url: 'http://purple.com',
                title: 'Purple',
                desc: 'A place to purple stuff'
            }]
        }, {
            group_title: "NTL Links",
            _id: "ntl",
            links: [{
                _id: Random.id(),
                url: 'http://google.com',
                title: 'NTL',
                desc: 'A place to google stuff'
            }, {
                _id: Random.id(),
                url: 'http://yahoo.com',
                title: 'Yahoo',
                desc: 'A place to yahoo stuff'
            }, {
                _id: Random.id(),
                url: 'http://purple.com',
                title: 'Purple',
                desc: 'A place to purple stuff'
            }]
        }];

        groups.forEach((group: Group) => Groups.insert(group));
    }
}