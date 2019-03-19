(function(){
    angular.module("navbar").controller("navCtrl",["$state",controller]);
    function controller($state){
        var vm = this;
        vm.buttonList = [
            {name:"Main", url:"frontPage"},
            {name:"Contact", url:"contactPage"}];
//            {name:"FrontPage2", url:"frontPage"}];
        vm.navigate = function(url){
            //console.log(url);
            $state.go(url);
        };
    }
})();