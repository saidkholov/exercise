angular.module('directives').
	directive('myautofocus', ['$timeout', function ($timeout) {
		return {
			restrict : "A",
			link : function(scope, element, attrs) {
				scope.$watch(attrs.myautofocus, function(value) {
					if(value === true) {
						$timeout(function() {
							element[0].focus();
						});
					}
				});
			}
		}
	}])