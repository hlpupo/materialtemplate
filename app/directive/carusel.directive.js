(function(){
  'use strict';
  angular.module("myApp.directives").directive('gb-carousel', bgCarousel);
  function bgCarousel(){
    return {
      link: link,
      strict: 'A'
    };

    function link(scope, element, attr){

    }
  }
})();
