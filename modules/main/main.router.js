(function(){
  angular.module('DashboardApp.main',[])
  .config(function($stateProvider) {

    $stateProvider
      .state('root.main', {
        url: '/',
        templateUrl: 'modules/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })

  });
})();
