/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var NavigationView = Backbone.View.extend({
        template: JST['app/scripts/templates/navigation.hbs'],
        el : '[data-region="nav"]',

        render : function() {
        	this.$el.html(this.template());
        }
    });

    return NavigationView;
});
