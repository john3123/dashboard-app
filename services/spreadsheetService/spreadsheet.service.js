(function(){
  angular.module('DashboardApp.services.spreadsheetService',[])
    .factory('spreadsheetService', spreadsheetService);

  function spreadsheetService($http, $q) {

    var sheetId = '1JhRnbagPdeNu0q0cBg3PuHzMOMLTbHUXPgt_W6qTKWQ';
    var endpoint = 'https://spreadsheets.google.com/feeds/list/' + sheetId + '/od6/public/full?alt=json'

    function getSpreadsheet() {
      var deferred = $q.defer();
      $http.get(endpoint).then(function(response){
        var stringifiedRows = response.data.feed.entry
        var rows = stringifiedRows.map(function(curr){
          return curr.content.$t.split(",").map(function(curr){return curr.substr(curr.indexOf(":")+2)});
        });
        deferred.resolve(rows);
      });
      return deferred.promise;
    }

    return {
      getSpreadsheet: getSpreadsheet
    }
  }
})();
