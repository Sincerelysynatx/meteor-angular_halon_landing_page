import { MongoObservable } from 'meteor-rxjs';
import { Group } from '../models/group.model';

export const Groups = new MongoObservable.Collection<Group>('groups');