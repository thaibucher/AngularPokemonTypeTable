(function(){
    angular.module("typeTable").controller("tableCtrl",["$state", "$timeout", "$rootScope", "pokeData", controller]);
    function controller($state, $timeout, $rootScope, pokeData){
        var vm = this;
        vm.sticky = false;
        vm.showDualColumn = false;
        vm.selectedTypeData = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        pokeData.typeList().then(function(r){vm.typeList = r});
        $rootScope.$on("updateTypeIds", function(event,data){
            vm.typeIds = data;
            angular.element(".type-cell").addClass("hide");
            angular.forEach(vm.typeIds, function(v,k){
                angular.forEach(angular.element(".type-cell"), function(v2,k2){
                    if(parseInt(v2.dataset.typeid) === v){
                        angular.element(v2).removeClass("hide");
                        angular.element(v2).addClass("highlight");
                    }
                });
            });
            for(var i=0;i<vm.typeList.length;i++){
                vm.selectedTypeData[i] = vm.typeList[i].eff[vm.typeIds[0]] * (vm.typeIds.length === 1 ? 1 : vm.typeList[i].eff[vm.typeIds[1]]);
            }
            vm.showDualColumn = true;
        });
        $rootScope.$on("resetData", function(event,data){
            angular.forEach(angular.element(".type-cell"), function(v2,k2){
                angular.element(v2).removeClass("hide");
                vm.showDualColumn = false;
            });
        });
        vm.clickCell = function($event){
          vm.sticky = !vm.sticky;
          if(!vm.sticky){
              vm.cellHover($event);
          }
        };

        vm.cellHover = function($event){
            if(!vm.sticky){
                angular.element("td").removeClass("hover-vert");
                angular.element("td").removeClass("hover-horz");
                var cell = $event.target;
                var coords = {row: cell.parentElement.rowIndex, typeId: cell.dataset.typeid};
                angular.element(angular.element("tr")[coords.row].children).addClass("hover-horz");
                angular.element("[data-typeId='"+coords.typeId+"']").addClass("hover-vert");
            }
        };

        vm.leaveCell = function(){
            if(!vm.sticky){
                angular.element("td").removeClass("hover-vert");
                angular.element("td").removeClass("hover-horz");
            }
        };

        vm.columnHeaderClick = function($event){
            var targets = angular.element("[data-typeId='"+$event.target.dataset.typeid+"']");
            if(targets.hasClass("hide")){
                targets.removeClass("hide");
                targets.addClass("highlight");
            } else {
                targets.addClass("hide");
                targets.removeClass("highlight");
            }
        };

        vm.rowHeaderClick = function($event){
            var children = angular.element($event.target.parentElement.children);
            if(children.hasClass("header-sticky")){
                children.removeClass("header-sticky");
            } else {
                children.addClass("header-sticky");
            }
        };

        vm.rowHeaderOver = function($event){
            angular.element($event.target.parentElement.children).addClass("header-hover");
        };

        vm.rowHeaderLeave = function($event){
            angular.element($event.target.parentElement.children).removeClass("header-hover");
        };
//font-family: 'VT323', monospace;
    }
})();