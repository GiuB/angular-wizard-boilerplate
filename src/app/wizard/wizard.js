angular.module( 'ngBoilerplate.wizard', [
  'ui.router',
  'ui.router.compat',
  'placeholders',
  'ui.bootstrap',
  'ngAnimate'
])

.config(function config( $stateProvider, $urlRouterProvider ) {
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

.controller( 'WizardCtrl', function WizardCtrl( $scope, $rootScope ) {
  $scope.steps = ['1', '2', '3'];
  $scope.currentStep = $scope.steps[0];

  $scope.$on('$stateChangeSuccess', function (event, toState) {
    $scope.currentStep = toState.name.replace(/wizard.step-/g,"");

    if ($scope.currentStep == '2') {
     $scope.back = true;
    } else {
     $scope.back = false;
    }

    console.log('state changed, animaton back: ' + $scope.back);
  });

});

