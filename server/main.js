import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
});

Meteor.methods({
    rolesCreateUser: function (userId) {

        if (userId) {
            Roles.addUsersToRoles(userId, ['admin']);

            return true;
        }
    }
});