(function(){
    angular.module("pokeSearch").filter("pokeSearchFilter", ["pokeData", filter]);
    function filter(pokeData){
        return function(items,query){
            query = query.toLowerCase();
            if(!query) return items;
            return items.filter(function(item){
                return item.id.toString().includes(query) ||
                item.name.toLowerCase().includes(query) ||
                item.types[0] === query ||
                item.types[1] === query;
            });
        };
    }
})();