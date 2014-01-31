/*global define*/

define([
    'backbone',
], function (Backbone) {
    'use strict';

    var MainrouterRouter = Backbone.Router.extend({
        routes: {
            'register'  : 'register',
        	'*default' : 'default'
        },

        register : function() {
            App.command.registerView();
        },

        default : function() {
            App.command.homeView();
        }

    });

    return MainrouterRouter;
});
