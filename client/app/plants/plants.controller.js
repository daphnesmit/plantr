'use strict';
(function(){

class PlantsComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/things')
            .then(response => {
      this.awesomeThings = response.data;
    this.socket.syncUpdates('thing', this.awesomeThings);
  });
}

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('plantrApp')
  .component('plants', {
    templateUrl: 'app/plants/plants.html',
    controller: PlantsComponent
  });

})();
