/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var RegisterView = Backbone.View.extend({
        template: JST['app/scripts/templates/register.hbs'],
        el: '[data-region="main"]',

        render : function() {
        	this.$el.html(this.template());
        }
    });

    return RegisterView;
});
