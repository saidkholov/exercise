angular.module('services', []);
angular.module('directives', []);

angular.module('toptal', ['directives', 'services'])
	.controller('ToptalController',['$scope', 'fileReader', function($scope, fileReader) {
		$scope.thing = "asd";
		$scope.uploadFile = function(el, target) {
			fileReader.readAsDataUrl(el.files[0], $scope)
				.then(function(result) {
				  $scope[target] = result;
				});
		};
}]);