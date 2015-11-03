angular.module('directives')
	.directive('mycontent', function() {
		return {
			restrict : 'E',
			templateUrl: 'js/templates/content.html',
			scope: {title: "@"},
			controller : ['$scope', function($scope) {
				$scope.toggleEdit = function(e, bool) {
					e.stopPropagation();
					e.preventDefault();
					$scope.edit = bool;
				};
			}]
		};
	});