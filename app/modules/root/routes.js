(function(){
    angular.module("root").config(["$stateProvider", function($stateProvider){
        $stateProvider.state("root",{
            abstract: true,
            url: '/',
            views:{
                "navbar":{
                    templateUrl: "templates/navbarTemplate.html"
                },
                "content":{
                    template:"<div>Haven't loaded anything else yet</div>"
                }
            }
        });
    }]).run(["$state",function($state){
        $state.go("frontPage");
    }]);
})();