/**
 * Created by D'oh on 6/26/16.
 */
import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks';

import './body.html';

Template.body.helpers({
    tasks(){
        return Tasks.find({}, { sort: {createdAt: - 1}});
    },
});

Template.body.events({
    'submit.new-task'(event){
        //prevent default form submit
        event.preventDefault();

        //get value from form element
        const target = event.target;
        const text = target.text.value;

        //insert a task into collection

        Tasks.insert({
            text,
            createdAt:new Date(),// current time

        });
        target.text.value = '';
    },
});