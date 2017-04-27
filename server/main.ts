import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { loadGroups } from './imports/fixtures/group';

Meteor.startup(() => {
    if (!Accounts.findUserByUsername("halon_infra"))
    {
        Accounts.createUser({
            username: "halon_infra",
            password: "sudormetc",
        });
    }
    loadGroups();
});