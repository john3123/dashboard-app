(function(){

  angular.module('DashboardApp.main')
  .controller('MainCtrl', MainCtrl);

  function MainCtrl(spreadsheetService) {
    var vm = this;
    
    spreadsheetService.getSpreadsheet().then(function(response){
      console.log(response);
    })

  }

})();
