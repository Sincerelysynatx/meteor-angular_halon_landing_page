import { MongoObservable } from 'meteor-rxjs';
import { Group } from '../models/group.model';

export const Groups = new MongoObservable.Collection<Group>('groups');

function loggedIn(){
    return !!Meteor.user();
}

Groups.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});