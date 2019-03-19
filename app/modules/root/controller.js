(function(){
    angular.module("root").controller("rootCtrl", [controller]);
    function controller(){
        var vm = this;
        vm.test = "default";
    }
})();