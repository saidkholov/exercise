angular.module('directives')
	.directive('myskill', function() {
	  return {
	  	restrict : 'E',
	    templateUrl: 'js/templates/skills.html',
	    scope: {},
	    link : function(scope, element, attrs) {
	    	scope.toggleEdit = function(bool) {
	    		scope.edit = bool;
	    	}
	    }
	  };
	});