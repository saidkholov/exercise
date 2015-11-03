angular.module('directives')
	.directive('myskill', function() {

		var addSkill = function($scope) {
			var newSkills = $scope.new_skill.split(' ');
			$scope.new_skill = "";
			for (var i = 0; i < newSkills.length; i++) {
				$scope.skills.push({
					name : newSkills[i],
					strength : $scope.strength
				});
			}
		}

		return {
			restrict : 'E',
			scope : {},
			templateUrl: 'js/templates/skills.html',
			controller : ['$scope', function($scope) {
				
				$scope.strength = 'strong';
				$scope.skills = [];

				$scope.toggleEdit = function(bool) {
					$scope.edit = bool;
					
					if (!bool) {
						addSkill($scope);
					}
				};
				
				$scope.removeSkill = function(index) {
					$scope.skills.splice(index, 1);
				};
			}]
		};
	});