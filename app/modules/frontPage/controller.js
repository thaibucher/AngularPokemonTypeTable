(function(){
    angular.module("frontPage").controller("frontCtrl", ["$rootScope", controller]);
    function controller($rootScope){
        var vm = this;
        vm.reset = function(){
            $rootScope.$emit("resetData", true);
        };
    }
})();