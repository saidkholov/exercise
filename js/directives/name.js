angular.module('directives')
	.directive('myname', function() {
	  return {
	  	restrict : 'E',
	    templateUrl: 'js/templates/myname.html',
	    scope: {},
	    link : function(scope, element, attrs) {
	    	scope.toggleEdit = function(bool) {
	    		scope.edit = bool;
	    	}
	    }
	  };
	});