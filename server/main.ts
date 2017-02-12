import { Meteor } from 'meteor/meteor';

import { loadLinks } from './imports/fixtures/links';
import { loadGroups } from './imports/fixtures/group';

Meteor.startup(() => {
    loadLinks();
    loadGroups();
});