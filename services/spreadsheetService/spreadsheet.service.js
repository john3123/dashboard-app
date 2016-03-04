(function(){
  angular.module('DashboardApp.services.spreadsheetService',[])
    .factory('spreadsheetService', spreadsheetService);

  function spreadsheetService($http, $q) {

    var sheetId = '1JhRnbagPdeNu0q0cBg3PuHzMOMLTbHUXPgt_W6qTKWQ';
    var endpoint = 'https://spreadsheets.google.com/feeds/list/' + sheetId + '/od6/public/full?alt=json'

    function getSpreadsheet() {
      var deferred = $q.defer();
      $http.get(endpoint).then(function(response){
        var rows = massageRowsData(response.data.feed.entry);
        deferred.resolve(rows);
      });
      return deferred.promise;
    }

    function massageRowsData(rowsData) {
      var rows = rowsData.map(function(currentRowData){
        var stringifiedRow = currentRowData.content.$t;
        return stringifiedRow.split(",").map(function(stringifiedCell){
          var cellContentIndex = stringifiedCell.indexOf(":")+2;
          return stringifiedCell.substr(cellContentIndex)
        });
      });
      return rows;
    }

    return {
      getSpreadsheet: getSpreadsheet
    }
  }
})();
