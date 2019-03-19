(function(){
    angular.module("pokeSearch").controller("searchCtrl",["$rootScope", "pokeData", '$timeout',controller]);
    function controller($rootScope, pokeData, $timeout){
        var vm = this;
        vm.searchText = "";
        vm.showResults = false;
        pokeData.pokeList().then(function(r){vm.pokeList = r});
        pokeData.typeList().then(function(r){vm.typeList = r});

        $rootScope.$on("resetData", function(event,data){
            vm.searchText = "";
            vm.showResults = false;
        });

        vm.typeToId = function(typeName){
            return _.findWhere(vm.typeList, {name:typeName}).id;
        };

        vm.searchItemClick = function(pokemon){
            var types = [vm.typeToId(pokemon.types[0])];
            if(pokemon.types.length === 2)
                types.push(vm.typeToId(pokemon.types[1]));
            $rootScope.$emit("updateTypeIds", types);
        };

        vm.searchType = function(){
          if(vm.searchText.length >= 3 || !isNaN(parseInt(vm.searchText))){
              vm.showResults = true;
          } else {
              vm.showResults = false;
          }
        };
    }
})();
//"name":"\U\1
/*
$http.get("https://pokeapi.co/api/v2/pokemon/"+i+'/').then(function(resolution){
    var r = resolution.data;
    var pokemon = {};
    pokemon.name = r.name;
    pokemon.types = [];
    pokemon.id = r.id;
    pokemon.sprite = r.sprites.front_default;
    angular.forEach(r.types, function(v,k){
        if(v.slot === 1){
            pokemon.types.unshift(v.type.name);
        } else {
            pokemon.types.push(v.type.name);
        }
    });
    vm.pokeList.push(pokemon);
    if(i<802){
        vm.clickBtn(i+1);

    } else {
        console.log(vm.pokeList);
    }
});*/
