angular.module('surfspotter').directive('image', [
    function() {
        // Runs during compile
        return {
            scope: {
                url: '@',
                imageWidth: '@',
                imageHeight: '@'
            },
            template: '<img class="img-responsive" data-ng-src="{{url}}" onerror="this.style.display=\'none\';">',
            replace: true,
            link: function($scope, element, attrs) {
                attrs.$set('height', element[0].offsetWidth * ($scope.imageHeight / $scope.imageWidth));
                //Once loaded reset height to auto
                element.bind('load', function() {
                    attrs.$set('height', 'auto');
                });
            }
        };
    }
]);


angular.module('surfspotter').directive('imageBg', [
    function() {
        // Runs during compile
        return {
            scope: {
                imageWidth: '@',
                imageHeight: '@',
                imageBg: '@'
            },
            controller: [ '$scope', '$element', '$window', function ($scope, $element, $window) {
                $element.css('height', ($element[0].offsetWidth * ($scope.imageHeight / $scope.imageWidth)) + 'px');
                $element.css('background-image', 'url(\'' + $scope.imageBg + '\')');

                angular.element($window).bind('resize', function () {
                    $element.css('height', ($element[0].offsetWidth * ($scope.imageHeight / $scope.imageWidth)) + 'px');
                });

            }]

        };
    }
]);
