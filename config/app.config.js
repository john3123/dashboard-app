(function(){
  angular.module('DashboardApp').config(function($stateProvider){
      $stateProvider
        .state('root', {
          abstract: true,
          template: '<ui-view></ui-view>'
        });
  })
})();
