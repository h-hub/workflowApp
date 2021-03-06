/**
 * Created by harsha.kj89@gmail.com on 7/30/2016.
 */
'use strict';

angular.module('home.top-nav').directive('topNav',function($templateCache){
    return {
        restrict: 'E',
        template: $templateCache.get('top-nav/top-nav.html'),
        controller: function ($rootScope, $scope,$location,Session) {
            $scope.click = function(path){
                $location.path(path);
            };
            $scope.signOut = function(){
                Session.logout();
                Session.redirectToLogin();
            }
        }
    };
});
