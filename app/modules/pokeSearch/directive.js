(function(){
    angular.module("pokeSearch").directive("pokeSearch", [directive]);
    function directive(){
        return {
            restrict: "E",
            templateUrl: "templates/pokeSearchTemplate.html",
            scope:{}
        };
    }
})();