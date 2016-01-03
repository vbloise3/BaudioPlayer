/**
 * Created by vbloise3 on 1/1/16.
 */
'use strict';

/* Directives */

var presentationDirectives = angular.module('presentationDirectives', []);
presentationDirectives.directive('presentationMenu', function() {
    return {
        restrict: 'A',
        templateUrl: 'players/views/players.client.view.mainMenu.html',
        link: function (scope, el, attrs) {
            scope.label = attrs.menuTitle;
        }
    };
});