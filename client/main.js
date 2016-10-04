import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import './main.html';

/*if (true) */import './imports/org/otk/tpl/cover/css/cover.css';
/*else import './imports/org/otk/tpl/justified/css/justified-nav.css';*/

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click a'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);

    /*Meteor.call('rolesCreateUser', Meteor.userId(), function (error, newCreatedUser) {

        if (error) {
            alert('error - ' + error);
        } else {
            alert(newCreatedUser);
        }

    });*/

    Errors.throw('asdf');
  },
});

fireReload = false;

Meteor.startup(function () {
});
