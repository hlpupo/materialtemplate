(function () {
  'use strict';
  angular.module('myApp.filters', []);
  angular.module('myApp.Services', []);
  angular.module('myApp.directives', []);
  angular.module('myApp.controllers', []);
  angular.module('myApp', [
    'ngMaterial',
    'ngMdIcons',
    'ngAnimate',
    'myApp.controllers',
    'myApp.directives',
    'myApp.Services',
    'myApp.filters'
  ]).config(function ($mdIconProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('amber')
        .primaryPalette('amber')
        .accentPalette('orange');
    $mdThemingProvider.alwaysWatchTheme(true);
    $mdIconProvider
        .iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg', 24)
        .iconSet('action', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg', 24)
        .iconSet('navigation', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg', 24)
        .defaultIconSet('bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg', 24);
  });

  angular.module('myApp.controllers')
      .controller('controller',
          ['$scope', '$mdMedia', '$mdSidenav', '$timeout', '$animate',
            function ($scope, $mdMedia, $mdSidenav, $timeout, $animate) {
              $scope.theme = 'amber';
              $scope.$mdMedia = $mdMedia;
              $scope.urlIcon = "bower";
              $scope.cantCard = [
                {},
                {},
                {},
                {},
                {},
                {}
              ];
              $scope.showSearch = false;

              $scope.openSiderNav_Left = function () {
                $mdSidenav('left').toggle();
              }
              $scope.Jobs = [
                {
                  'title': 'developer',
                  'company': 'Name of company',
                  'description': ' description',
                  'skill': [
                    {'name': 'HTML', 'val': 80},
                    {'name': 'JAVA', 'val': 60},
                    {'name': 'CSS', 'val': 50}
                  ]
                },
                {
                  'title': 'developer',
                  'company': 'Name of company',
                  'description': ' description',
                  'skill': [
                    {'name': 'HTML', 'val': 80},
                    {'name': 'JAVA', 'val': 60},
                    {'name': 'CSS', 'val': 50}
                  ]
                },
                {
                  'title': 'developer',
                  'company': 'Name of company',
                  'description': ' description',
                  'skill': [
                    {'name': 'HTML', 'val': 80},
                    {'name': 'JAVA', 'val': 60},
                    {'name': 'CSS', 'val': 50}
                  ]
                },
                {
                  'title': 'developer',
                  'company': 'Name of company',
                  'description': ' description',
                  'skill': [
                    {'name': 'HTML', 'val': 80},
                    {'name': 'JAVA', 'val': 60},
                    {'name': 'CSS', 'val': 50}
                  ]
                },
                {
                  'title': 'developer',
                  'company': 'Name of company',
                  'description': ' description',
                  'skill': [
                    {'name': 'HTML', 'val': 80},
                    {'name': 'JAVA', 'val': 60},
                    {'name': 'CSS', 'val': 50}
                  ]
                },
                {
                  'title': 'developer',
                  'company': 'Name of company',
                  'description': ' description',
                  'skill': [
                    {'name': 'HTML', 'val': 80},
                    {'name': 'JAVA', 'val': 60},
                    {'name': 'CSS', 'val': 50}
                  ]
                },
              ];


              //init function wow
              $scope.init  = function () {
                new WOW().init();
              };

              //table pricing
              $scope.pricing = [{},{},{}];



            }])



})();