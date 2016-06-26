/**
 * Created by D'oh on 6/26/16.
 */
import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks';

import './body.html';

Template.body.helpers({
    tasks(){
        return Tasks.find({});
    },
});