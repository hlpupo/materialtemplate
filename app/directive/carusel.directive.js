(function(){
  'use strict';
  angular.module("myApp.directives").directive('gbCarousel', bgCarousel);
  bgCarousel.$inject = ['$timeout', '$animate'];
  function bgCarousel($timeout, $animate){
    return {
      link: link,
      strict: 'E',
      templateUrl: 'directive/carousel.directive.html'
    };

    function link(scope, element, attr){
      scope.itemActive  = 0;

      function doSomething() {
        scope.itemActive = scope.itemActive === 0 ? 1 : 0;
        $timeout(doSomething, 3000);
      }
      $timeout(doSomething, 3000);
    }
  }
})();
