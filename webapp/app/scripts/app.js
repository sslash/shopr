/*global define*/
define([
    'underscore',
    'backbone',
    'routes/mainRouter',
    'models/user'
], function (_, Backbone, MainRouter, User) {
    'use strict';

    var App = function() {
    };

    _.extend(App.prototype, {
        start : function() {
            this.router = new MainRouter();
            Backbone.history.start();
            return this;
        },

        init : function(){
            this.user = new User({});
            return this;
        }

    });

     return App;
 });