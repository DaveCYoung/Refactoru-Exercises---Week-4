
angular.module('exModule', []);
angular.module('exModule');
angular.module('exModule').controller('mainController', ['$scope', '$sce','$http', function($scope, $sce, $http){
$scope.storyshow = false;
$scope.color = "#000000"
$scope.actors = []
$scope.relations = [];
$scope.displayArray=[];
$scope.relationshipValues = [
.2, .2, .1, .9, .9, .1, .2, .8, 1, .3, //Saudi
1, 1, .1, .8, .8, .3, .9, .2, .2, //Russia
1, .2, .1, 1, .8, .1, .8, 1,  //US
.1, .2, .1, .1, .1, .1, .2,  // Turkey
1, 1, .1, 1, .7, .1,  // Iran
.2, .1, .1, .1, .1,  // Al Nusra
.3, .1, .1, 1, // Syrian Kurds
.3, .3, .1,  //Iraqi Kurds
.1, .1,  //ISIL
1 //Syria
]
//function to allocate color
$scope.colorSelect = function(input){
	if (0 <= input <= .1){
		return '#FF3300'
	}
	else if (.1<input<=.2){
		return '#FF5C33'
	}
	else if(.2<input<=.3){
		return '#FF8566'
	}
	else if(.3<input<=.4){
		return '#FFAD99'
	}
	else if(.4<input <=.5){
		return '#FFD6CC'
	}
	else if(.5< input<=.6){
		return'#D6F5D6'
	}
	else if(.6 < input <=.7){
		return '#ADEBAD'
	}
	else if(.7< input <=.8){
		return'#85E085'
	}
	else if(.8< input <=.9){
		return '#5CD65C'
	}

	else if (.9< input <=1){
		return'#33CC33'
	}}

//Object for single actors
var SingleActor = function(header, queryTerm){
	this.header=header;
	this.queryTerm=queryTerm;
}
// Object for Relationship
var Relation = function (country1, country1QueryTerm, country2, country2QueryTerm, score){
	this.country1=country1;
	this.country1QueryTerm = country1QueryTerm;
	this.country2= country2;
	this.country2QueryTerm = country2QueryTerm;
	this.score = score;
	this.color = '#CCCCCC';
	this.border= false;
}
// All Actors and Query Terms Below. 
$scope.actors.push(new SingleActor('Iraqi Government','?query[value]=iraq%20iraqi[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Syrian Government','?query[value]=syria%20assad&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('ISIL','?query[value]=isil%20isis&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Iraqi Kurdistan','?query[value]=kurds%20kurdistan%20pkk&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Syrian Kurds','?query[value]=kurds%20ypg&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Al Nusra Front','?query[value]=nusra&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Iran, Paramilitary, Aligned Militias','?query[value]=iran&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Turkey','?query[value]=turkey%20turkish&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('United States','?query[value]=us%20america%20american&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Russia','?query[value]=russia%20russian&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Saurdi Arabia and Arab Coalition','?query[value]=saudi%20arab&query[fields][]=title&query[operator]=OR'))

$scope.populate = function(){
	for(i=($scope.actors.length-1); i >0 ; i--){// populates relationship actors and query terms for Reliefweb API
		for (j = 0; j < i; j++){
				$scope.relations.push(new Relation($scope.actors[i].header, $scope.actors[i].queryTerm, $scope.actors[j].header, $scope.actors[j].queryTerm, 0))
		}
	}
	for(i = 0; i<$scope.relations.length; i++){ // Populates realtionship score and color values
		$scope.relations[i].score = $scope.relationshipValues[i];
		$scope.relations[i].color = $scope.colorSelect($scope.relations[i].score)
	}
	
}

$scope.populate() //populates Relationship Array.  

// Function that calls API for UN Reports
$scope.currentCountries = []
$scope.click = function(x){
	$scope.displayArray=[];
	$scope.storyshow = true;
		$scope.currentCountries = []
		$scope.currentCountries.push($scope.relations[x].country1)
		$scope.currentCountries.push($scope.relations[x].country2)
		$http.get('http://api.rwlabs.org/v1/reports'+$scope.relations[x].country1QueryTerm+$scope.relations[x].country2QueryTerm+ '?query[value]=syria%20iraq%20war&query[fields][]=body&query[operator]=AND').then(function(response){
			console.log(response)
			for (var i=0; i<response.data.data.length; i++){
				$scope.displayArray.push(response.data.data[i])
			}	  	
		}, function(error){
		console.log(error)
		});
}

$scope.closeButton = function(){
	$scope.storyshow = false;
}

$scope.storyBack = function(){
	$scope.storyshow = true;
	$scope.bodyshow = false;
}
$scope.storyClose = function(){
	$scope.storyshow = false;
	$scope.bodyshow = false;
}

$scope.storystring ='';
$scope.bodyshow = false;
//necessary for Angular to Accept HTML 
$scope.to_trusted = function(html_code) {
    return $sce.trustAsHtml(html_code);
}
//function to pull HTML for UN Report from database
$scope.loadStory= function($index){
	$scope.storyshow = false;
	$scope.bodyshow = true;
	$http.get($scope.displayArray[$index].href).then(function(response){
		$scope.storystring = response.data.data[0].fields.body
	})
}

$scope.mouseOver = function(color){
	for (i=0; i<$scope.relations.length;i++){
		if(color === $scope.relations[i].color){
			$scope.relations[i].border=true;
		}
	}
}
$scope.mouseLeave = function(){
	for (i=0; i<$scope.relations.length;i++){
		$scope.relations[i].border=false;
	}
}

}])




