'use strict';

define(function (require){

    var angular = require('angular');
    var ngRoute = require('ngRouter');
    var _ = require('lodash');

    var myApp = angular.module('myApp', []);

    // Init
    var App = {
        setConfig: function(){
            var config = function ($httpProvider) {
                $httpProvider.defaults.useXDomain = true;
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
            }
            myApp.config(['$httpProvider', config]);

            return this;
        },
        setControllers: function(){
            var mainController = require('controllers/main.controller');
            myApp.controller('mainController', ['$scope', '$http', '$sce', mainController]);

            return this;
        },
        setDirectives: function(){
            var ngClickLink = require('directives/ng-click-link.directive');
            myApp.directive('ngClickLink', ['$location', ngClickLink]);

            return this;
        },
        setFilters: function(){
            return this;
        },
        setProviders: function(){
            return this;
        },
        setServices: function(){
            return this;
        },
        setFactories: function(){
            return this;
        },

        init: function(){
            this
                .setConfig()
                .setControllers()
                .setDirectives()
                .setFactories()
                .setServices()
                .setProviders();
        }
    }



    return { 
        run: function(){
            var $html = angular.element(document.getElementsByTagName('html')[0]);
                angular.element().ready(function (){
                    // Init app
                    App.init();
                    
                    // Bootstrap the app manually
                    angular.bootstrap(document, ['myApp']);
                });
            }
        }
    }
);
