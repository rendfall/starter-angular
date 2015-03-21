'use strict';

define(function (require) {

    // Components
    var Utils = require('factories/utils.factory');

    // Controller body
    var mainController = function ($scope, $http, $sce) {
        $scope.data = null;
        $scope._ = _;

        // Some Utils methods
        $scope.parseDate = Utils.parseDate;
        $scope.liame = Utils.antispamEmail;
    }
    
    return mainController;
});

