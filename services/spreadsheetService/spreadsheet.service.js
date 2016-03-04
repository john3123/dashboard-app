(function(){
  angular.module('DashboardApp.services.spreadsheetService',[])
    .factory('spreadsheetService', spreadsheetService);

  function spreadsheetService($http, $q) {

    var sheetId = '1JhRnbagPdeNu0q0cBg3PuHzMOMLTbHUXPgt_W6qTKWQ';
    var endpoint = 'https://spreadsheets.google.com/feeds/list/' + sheetId + '/od6/public/full?alt=json'

    function getSpreadsheet() {
      var deferred = $q.defer();
      $http.get(endpoint).then(function(response){
        var rows = massageData(response.data.feed.entry);
        deferred.resolve(rows);
      });
      return deferred.promise;
    }

    function massageData(rowsData) {
      return rowsData.map(massageRow);
    }
    function massageCell(stringifiedCell) {
      var cellContentIndex = stringifiedCell.indexOf(":")+2;
      return stringifiedCell.substr(cellContentIndex)
    }
    function massageRow(currentRowData) {
      var stringifiedRow = currentRowData.content.$t;
      return stringifiedRow.split(",").map(massageCell);
    }

    return {
      getSpreadsheet: getSpreadsheet
    }
  }
})();
