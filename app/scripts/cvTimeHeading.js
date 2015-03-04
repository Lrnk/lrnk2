'use strict';


angular
  .module('lrnk2App')
  .directive('cvTimeHeading', function () {
    return {
      restrict: 'E',
      template: '<div class="cv-time-heading row"><div class="col-xs-8"> <h3>{{title}}</h3></div><div class="col-xs-4 dates"> <h3> <small>{{dates}}</small></h3> </div> </div>',
      scope: {
        title: '@',
        dates: '@'
      }
    };
  });
