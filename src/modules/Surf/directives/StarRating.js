angular.module('surfspotter').directive('starRating', [ function(){
    return {
      restrict: 'EA',
      template:
        '<ul class="star-rating">' +
        '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}">' +
        '  </li>' +
        '</ul>',
      scope: {
        ratingValue: '=ngModel'
      },
      link: function(scope) {
        if (scope.max === undefined) {
          scope.max = 5;
        }
        scope.stars = [];
        for (var i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled: i < scope.ratingValue
          });
        }
      }
    };
}]);
