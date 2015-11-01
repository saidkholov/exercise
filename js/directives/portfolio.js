angular.module('directives')
	.directive('myportfolio', function() {
	  return {
	  	restrict : 'E',
	    templateUrl: 'js/templates/portfolio.html',
	    scope: {},
	    link : function(scope, element, attrs) {

	    	var projects = [];
	    	for (var i = 0; i < 7; i++) {
	    		projects[i] = {name : "", skill: ""};
	    	};
	    	scope.projects = projects;

	    	scope.toggleEdit = function(e, bool) {
	    		e.stopPropagation();
	    		scope.edit = bool;
	    		if (scope.edit) {
		    		var skills = [];
		    		for (var i = 0; i < scope.projects.length; i++) {
		    			if (scope.projects[i].skill) {
		    				skills = skills.concat(scope.projects[i].skill.split(' '));
		    			}
		    		};

		    		skills = skills.filter(function (value, index, self) {
					    return self.indexOf(value) === index;
					});
		    		scope.skills = skills.join(", ");
		    	}
	    	};
	    }
	  };
	});