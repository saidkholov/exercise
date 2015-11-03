angular.module('directives')
	.directive('mylocation', function() {
		return {
			restrict : 'E',
			templateUrl : 'js/templates/location.html',
			controller : ['$scope', '$http', function($scope, $http) {
				var apiKey = 'AIzaSyDGY1xAY1rbmnefcMw0-7MRH3B8rHycY3s';
				
				$scope.toggleEdit = function(bool) {
					$scope.edit = bool;
				};
				
				$scope.getAddress = function() {
					var params = 'key=' + apiKey + '&input='+ $scope.location;
					$http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?' + params)
						.success(function(res){
							$scope.predictions = res.predictions;
						});
				};

				// Get autocoplete value and create a map pin 
				$scope.selectPrediction = function(location) {
					$scope.location = location;
					$scope.predictions = "";
					this.toggleEdit(false);
					
					// Create a map
					var map = new google.maps.Map(document.getElementById('map'), {
					   zoom: 15,
					   disableDefaultUI: true
					});

					// Set coords
					var geocoder = new google.maps.Geocoder();
					geocoder.geocode( { 'address': location}, function(results, status) {
						if (status === google.maps.GeocoderStatus.OK ) {
							map.setCenter(results[0].geometry.location);
							var marker = new google.maps.Marker({
								map: map,
								position: results[0].geometry.location
							});
						}
					});
				};
			}]
		};
	});