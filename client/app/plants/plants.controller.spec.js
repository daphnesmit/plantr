'use strict';

describe('Component: PlantsComponent', function () {

  // load the controller's module
  beforeEach(module('plantrApp'));

  var PlantsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PlantsComponent = $componentController('PlantsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
