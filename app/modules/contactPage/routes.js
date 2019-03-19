(function(){
    angular.module("contactPage").config(["$stateProvider", function($stateProvider){
        $stateProvider.state("contactPage",{
            url: "",
            views:{
                "navbar@":{
                    templateUrl:"templates/navbarTemplate.html"
                },
                "content@":{
                    templateUrl: "templates/contactPageTemplate.html",
                    controller: "contactCtrl"
                }
            }
        });
    }]);
})();