var app = angular.module('sqlApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/viewOne', {
            templateUrl: 'views/viewOne.html',
            controller: 'firstController'
        })
        .when('/viewTwo', {
            templateUrl: 'views/viewTwo.html',
            controller: 'secondController'
        });
    $locationProvider.html5Mode(true);
}]);


app.controller('firstController', ['$scope', '$http', function($scope, $http){
    $scope.getUsers = function(){
        $http.get('/getUsers').then(function(response, err) {
            //data.response = response.data;
            $scope.people = response.data;
            //console.log($scope.people);
        });
    };

    $scope.getAddresses = function(id) {
        console.log(id);
        $http.get('/getAddresses/' + id).then(function(response,err) {
            $scope.addresses = response.data;
            //console.log($scope.addresses);
        });
    };
}]);


app.controller('secondController', ['$scope', '$http', function($scope, $http){
    $scope.getUsers = function(){
        $http.get('/getUsers').then(function(response, err) {
            //data.response = response.data;
            $scope.people = response.data;
        });
    };
}]);