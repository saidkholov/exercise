angular.module('directives')
	.directive('mylanguages', function() {
		return {
			restrict : 'E',
			scope : {},
			templateUrl: 'js/templates/languages.html',
			controller : ['$scope', function($scope) {
				$scope.toggleEdit = function(bool) {
					$scope.edit = bool;
				};
			}]
		};
	});