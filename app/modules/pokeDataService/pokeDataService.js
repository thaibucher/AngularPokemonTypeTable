(function(){
    angular.module("root").factory("pokeData", ["$http", service]);
    function service($http){
        return {
            pokeList: function(){
                return $http.get('pokemonGen7.json').then(function(r){return r.data});
            },
            typeList: function(){
                return $http.get('typeListGen7.json').then(function(r){return r.data});
            }
        };
    }
})();