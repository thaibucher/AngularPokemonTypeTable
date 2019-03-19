(function(){
    angular.module("frontPage").config(["$stateProvider", function($stateProvider){
        $stateProvider.state("frontPage",{
            url: "",
            views:{
                "navbar@":{
                    templateUrl:"templates/navbarTemplate.html"
                },
                "content@":{
                    templateUrl: "templates/frontPageTemplate.html",
                    controller:"frontCtrl"
                }
            }
        });
    }]);
})();