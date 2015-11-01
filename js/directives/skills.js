angular.module('directives')
	.directive('myskill', function() {
	  return {
	  	restrict : 'E',
	    templateUrl: 'js/templates/skills.html',
	    scope: {},
	    link : function(scope, element, attrs) {
	    	
	    	scope.strength = 'strong';
	    	scope.skills = [];

	    	scope.toggleEdit = function(bool) {
	    		scope.edit = bool;
	    		if (!bool) {
		    		var newSkills = scope.new_skill.split(' ');
		    		scope.new_skill = "";
		    		for (var i = 0; i < newSkills.length; i++) {
		    			scope.skills.push({
		    				name : newSkills[i],
		    				strength : scope.strength
		    			});
		    		}
	    		}
	    	};
	    	
	    	scope.removeSkill = function(index) {
	    		scope.skills.splice(index, 1);
	    	};
	    }
	  };
	});