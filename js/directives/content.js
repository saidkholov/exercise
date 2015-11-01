angular.module('directives')
	.directive('mycontent', function() {
	  return {
	  	restrict : 'E',
	    templateUrl: 'js/templates/content.html',
	    scope: {},
	    link : function(scope, element, attrs) {
	    	scope.title = attrs.title;
	    	scope.toggleEdit = function(e, bool) {
	    		e.stopPropagation();
	    		e.preventDefault();
	    		scope.edit = bool;
	    	};
	    }
	  };
	});