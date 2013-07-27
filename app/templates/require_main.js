/* global require */

require.config({
    baseUrl: 'bower_components',
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                    'underscore',
                    'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: 'jquery/jquery',
        underscore: 'underscore-amd/underscore',
        backbone: 'backbone-amd/backbone',
        bootstrap: '../scripts/vendor/bootstrap',
        text: 'text/text',
        /* THESE are implied given the baseUrl
        dojo: 'dojo',
        dijit: 'dijit',
        dojox: 'dojox',
        dgrid: 'dgrid',
        xstyle: 'xstyle',
        'put-selector': 'put-selector',
        */
        esri: '//js.arcgis.com/3.6amd/js/esri',
        app: '../scripts/<%= appName %>'
    }
});
require(['app/Controller', 'backbone', 'bootstrap'], function(Controller, Backbone) {
    'use strict';
    Controller.startup();
});