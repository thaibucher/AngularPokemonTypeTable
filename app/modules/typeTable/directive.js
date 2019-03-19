(function(){
    angular.module("typeTable").directive("typeTable", [directive]);
    function directive(){
        return {
            restrict: "E",
            templateUrl: "templates/typeTableTemplate.html",
            scope:{}
        };
    }
})();