'use strict';

describe('Component: PlantsComponent', function () {

  // load the controller's module
  beforeEach(module('plantrApp'));
  beforeEach(module('stateMock'));
  beforeEach(module('socketMock'));

  var scope;
  var plantsComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state,
                             socket) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
            .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    plantsComponent = $componentController('main', {
      $http: $http,
      $scope: scope,
      socket: socket
    });
  }));

  it('should attach a list of things to the controller', function() {
    plantsComponent.$onInit();
    $httpBackend.flush();
    expect(plantsComponent.awesomeThings.length)
            .to.equal(4);
  });
});
