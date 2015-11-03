angular.module('directives')
	.directive('myname', function() {
		return {
			restrict : 'E',
			scope : {},
			templateUrl: 'js/templates/myname.html',
			controller : ['$scope', function($scope){
				$scope.toggleEdit = function(bool) {
					$scope.edit = bool;
				};
			}]
		};
	});