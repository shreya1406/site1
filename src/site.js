/// <reference path="../js/angular.js" />

app.controller("main_site", function main_site($scope, $http) {
	$scope.data = "";
	$scope.logout_user = function() {
		$scope.change_div_url('login.html', "");
	}
	$scope.get_user_data = function() {
		$http.get('../database/people.json')
            .then(function(data) {
                // angular.extend(_this, data);
                // defer.resolve();
                $scope.data = data.data;
                data.data.forEach(function(item) {
                	if (item.user == $scope.loggedin_user) {
                		$scope.user_data = item;
                	}
                });

                },function(error) {
                // defer.reject('could not find people.json');
                console.log(error);
            });
	}
})

