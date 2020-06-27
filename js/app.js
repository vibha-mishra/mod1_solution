(function(){
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
        $scope.dishes="";
        $scope.message="";
        $scope.messageType="";
        $scope.checkLunchStatus=function(dishes){
            if(dishes){
                var arrayOfDishes=DishesArray(dishes);
                $scope.messageType="alert-success";
                $scope.message=getMessage(arrayOfDishes.length);
            }
            else
            {
                $scope.messageType="alert-danger";
                $scope.message="Please enter data first";
               
            }
        };
    }
    function DishesArray(dishes)
    {
        return dishes.split(',');
    }
    function getMessage(numOfDishes)
    {
        if(numOfDishes>3){
            return "Too Much!";
        }
        else{
            return "Enjoy!";
        }
    }
})();