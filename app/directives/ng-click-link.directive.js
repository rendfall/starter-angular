'use strict';

define(function () {

    var ngClickLink = function ($location) {
        return {
            link: function(scope, element, attrs) {
                element.on('click', function() {
                    scope.$apply(function() {
                        $location.path('url=' + attrs.ngClickLink);
                    });
                });
            }
        }
    }

    return ngClickLink;
});