/*global define*/

define([
    'backbone',
    'views/navigation',
    'views/home'
], function (Backbone, NavView, HomeView) {
    'use strict';

    var MainrouterRouter = Backbone.Router.extend({
        routes: {
        	'*default' : 'default'
        },

        default : function() {
        	this.navView = new NavView();
        	this.navView.render();

            this.homeView = new HomeView();
            this.homeView.render();
        }

    });

    return MainrouterRouter;
});
