(function(){
 
  //Services
  angular.module('DashboardApp.services',[
    'DashboardApp.services.spreadsheetService'
  ]);

  //Directives
  angular.module('DashboardApp.directives', [

  ]);

  //Modules
  angular.module('DashboardApp.modules', [
    'DashboardApp.main'
  ]);

  //Main
  angular.module('DashboardApp',[
    'ui.router',
    'DashboardApp.services',
    'DashboardApp.directives',
    'DashboardApp.modules',
  ]);
})();
