angular.module('directives')
	.directive('mylanguages', function() {
	  return {
	  	restrict : 'E',
	    templateUrl: 'js/templates/languages.html',
	    scope: {},
	    link : function(scope, element, attrs) {
	    	scope.toggleEdit = function(bool) {
	    		scope.edit = bool;
	    	};
	    }
	  };
	});