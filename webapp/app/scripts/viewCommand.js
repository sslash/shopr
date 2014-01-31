/**
* Uses the command design pattern
*/

define([
    'jquery',
    'underscore',
    'backbone',

    // views
    'views/navigation',
    'views/home',
    'views/register'

], function ($, _, Backbone, NavView, HomeView, RegisterView) {
    'use strict';

    var ViewCommand = function(){};


    _.extend(ViewCommand.prototype, {

    	ui : {},

    	execute : function(cmd, options){
    		var _options = options || {};
            var that = this;  		

            this.preHandler(cmd);
            this[cmd].apply(that, [_options]);
            this.postHandler(_options);
    	},

    	preHandler : function(options) {

            if (!this.navView){
                this.navView = new NavView();
                this.navView.render();
            }

            if ( this.homeView){
                this.homeView.remove();
            }
    	},

        postHandler : function(options){
        },



        /****************************************
        *               VIEWS                   *
        *****************************************/

        registerView : function() {
            this.homeView = new RegisterView();
            this.homeView.render();
        },

        homeView : function() {
            this.homeView = new HomeView();
            this.homeView.render();
        },

    });

    return ViewCommand;
});