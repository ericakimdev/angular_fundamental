(function () {
'use strict';

angular.module('myFirstApp', [])
  .controller('MyFirstController', function ($scope) {
    $scope.name = "Erica";
    $scope.sayHello = function () {
      return "Hello Erica!";
    };
  });
})();
