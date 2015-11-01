angular.module('services', []);
angular.module('directives', []);

angular.module('toptal', ['directives', 'services'])
	.controller('ToptalController',['$scope', '$http', 'fileReader', function($scope, $http, fileReader) {

		$scope.toggleMenu = function(bool) {
			$scope.showMenu = bool;
		};

		if( window.width < 640) {
			$scope.isMobile = true;
		}

		$scope.uploadFile = function(el, target) {
			fileReader.readAsDataUrl(el.files[0], $scope)
				.then(function(result) {
				  $scope[target] = result;
				});
		};

		// Get skills
		var promise = $http.get('/mock/skills.json');
		promise.then(function(payload) {
			if (payload.statusText === "OK") {
				$scope.topSkills = payload.data.skills;
			}
		});
}]);