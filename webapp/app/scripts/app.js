/*global define*/
define([
    'underscore',
    'backbone',
    'routes/mainRouter',
    'models/user',
    'viewCommand'
], function (_, Backbone, MainRouter, User, Command) {
    'use strict';

    var App = function() {
        this.command = new Command();
    };

    _.extend(App.prototype, {
        start : function() {
            this.router = new MainRouter();
            Backbone.history.start();
        },

        init : function(){
            this.user = new User({});
        }
    });

     return App;
 });