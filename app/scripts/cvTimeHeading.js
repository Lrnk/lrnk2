'use strict';


angular
  .module('lrnk2App')
  .directive('cvTimeHeading', function () {
    return {
      restrict: 'E',
      template: '<div class="row"><div class="col-xs-8"> <h3>{{title}}</h3></div><div class="col-xs-4"> <h3> <small>{{dates}}</small></h3> </div> </div>',
      scope: {
        title: '@',
        dates: '@'
      }
    };
  });
