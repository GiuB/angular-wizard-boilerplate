angular.module( 'ngBoilerplate.wizard', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'wizard', {
      url: '/wizard',
      views: {
        "main": {
          controller: 'WizardCtrl',
          templateUrl: 'wizard/wizard.tpl.html'
        }
      },
      data:{ pageTitle: 'What is It?' }
    })

    // nested states
    // each of these sections will have their own view
    // url will be nested (/form/profile)
    .state('wizard.step-1', {
      url: '/step-1',
      templateUrl: 'wizard/steps/step-1.tpl.html'
    })

    .state('wizard.step-2', {
      url: '/step-2',
      templateUrl: 'wizard/steps/step-2.tpl.html'
    });
})

.controller( 'WizardCtrl', function WizardCtrl( $scope ) {
  $scope.steps = ['1', '2', '3'];
  $scope.currentStep = $scope.steps[0];

  $scope.goNext = function() {
    alert('test');
  };

  $scope.updateCurrentStep = function(step) {
    $scope.currentStep = step;

    alert($scope.currentStep);
  };

});

