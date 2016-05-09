(function(){
    
    angular.module('myFavs')
        .component('myFavsComponent', {
            templateUrl: 'app/components/favs/favs.html',
            controller: MyFavsController
        })
    
    
        function MyFavsController($firebaseArray){
            var fc = this;
            
            var favsRef = new Firebase('https://todo1237.firebaseio.com/favs/')            

            fc.list = $firebaseArray(favsRef)
            
            fc.addFav = function(fav){
                fc.list.$add(fav)
                fc.newFav = null
            }
            
            fc.removeFav = function(item){
                fc.list.$remove(item)
            }

        }
    
    
}())