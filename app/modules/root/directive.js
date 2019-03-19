(function(){
    angular.module("root").directive("siteroot", [directive]);
    function directive(){
        return {
            restrict: "E",
            templateUrl: "templates/rootTemplate.html",
            controller: "rootCtrl",
            scope:{}
        };
    }
})();