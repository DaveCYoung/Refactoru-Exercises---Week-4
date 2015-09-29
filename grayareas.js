
angular.module('exModule', []);
angular.module('exModule');
angular.module('exModule').controller('mainController', ['$scope', '$http', function($scope, $http){
$scope.storyshow = false;
$scope.color = "#000000"
$scope.actors = []
$scope.relations = [];
$scope.displayArray=[];
$scope.colorSelect = function(input){
	console.log(input)
	if (0 <= input <= .1){
		$scope.color = '#33CC33'
	}
	else if (.1<input<=.2){
		$scope.color = '#5CD65C'
	}
	else if(.2<input<=.3){
		$scope.color = '#85E085'
	}
	else if(.3<input<=.4){
		$scope.color = '#ADEBAD'
	}
	else if(.4<input <=.5){
		$scope.color = '#D6F5D6'
	}
	else if(.5< input<=.6){
		$scope.color = '#FFD6CC'
	}
	else if(.6 < input <=.7){
		$scope.color = '#FFAD99'
	}
	else if(.7< input <=.8){
		$scope.color = '#FF8566'
	}
	else if(.8< input <=.9){
		$scope.color = '#FF5C33'
	}

	else if (.9< input <=1){
		$scope.color = '#FF3300'
	}}

$scope.colorSelect(.8)
console.log($scope.color)

var popup = function(x){

}

var SingleActor = function(header, queryTerm){
	this.header=header;
	this.queryTerm=queryTerm;
	color = '#CCCCCC'

}

var Relation = function (country1, country1QueryTerm, country2, country2QueryTerm, score){
	this.country1=country1;
	this.country1QueryTerm = country1QueryTerm;
	this.country2= country2;
	this.country2QueryTerm = country2QueryTerm;
	this.score = score;
	this.color = '#CCCCCC'
}

$scope.actors.push(new SingleActor('Iraqi Government','?query[value]=iraq%20iraqi[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Syrian Government','?query[value]=syria%20assad&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('ISIL','?query[value]=isil%20isis&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Iraqi Kurdistan','?query[value]=kurds%20kurdistan%20pkk&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Syrian Kurds','?query[value]=kurds%20ypg&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Al Nusra Front','?query[value]=nusra&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Iran, Paramilitary, Aligned Militias','?query[value]=iran%20quds%20irgc%20hezbollah&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Turkey','?query[value]=turkey%20turkish&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('United States','?query[value]=us%20america%20american&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Russia','?query[value]=russia%20russian&query[fields][]=title&query[operator]=OR'))
$scope.actors.push(new SingleActor('Saurdi Arabia and Arab Coalition','?query[value]=saudi%20arab&query[fields][]=title&query[operator]=OR'))

$scope.populate = function(){
	for(i=($scope.actors.length-1); i >0 ; i--){
		for (j = 0; j < i; j++){
				console.log($scope.actors[i].header)
				console.log($scope.actors[j].header)
				console.log("=-=-=-=-=-=-=-=-=-")
				// $http.get('https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=ba521ca99affd724697f4fb794058a432c3ecf0f&outputMode=json&'+$scope.actors[i].query+$scope.actors[j].query+'outputMode=json&start=now-7d&end=now&maxResults=20&return=enriched.url.relations.relation.subject.keywords.keyword.sentiment.score').then(function(response){
				
				// colorSelect( #INPUT# )



				// 	}, function(error){
				// 	console.log(error)
				// 	});
				$scope.relations.push(new Relation($scope.actors[i].header, $scope.actors[i].queryTerm, $scope.actors[j].header, $scope.actors[j].queryTerm, 0))
		}
	}
}

$scope.populate()
console.log($scope.relations)

	$http.get('http://api.rwlabs.org/v1/reports?query[value]=isil%20isis&query[fields][]=title&query[operator]=OR?query[value]=syria%20iraq%20war&query[fields][]=body&query[operator]=AND&sort[]=date:desc').then(function(response){
					console.log(response)

					}, function(error){
					console.log(error)
					});


$scope.colorSelect();
console.log($scope.color)

$scope.click = function(x){
	$scope.displayArray=[];
	$scope.storyshow = true;
		$http.get('http://api.rwlabs.org/v1/reports'+$scope.relations[x].country1QueryTerm+$scope.relations[x].country2QueryTerm+ '?query[value]=syria%20iraq%20war&query[fields][]=body&query[operator]=AND').then(function(response){
			for (var i=0; i<response.data.data.length; i++){
				$scope.displayArray.push(response.data.data[i])
			}
			console.log($scope.displayArray)
		}, function(error){
		console.log(error)
		});
}


// $scope.hexString = (Math.round($scope.Val*255)).toString(16);
// console.log($scope.hexString)

// $http.get('https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=ba521ca99affd724697f4fb794058a432c3ecf0f&outputMode=json&q.enriched.url.title=A[syria^turkey]&q.enriched.url.text=A[syria^iraq^war]&outputMode=json&start=now-7d&end=now&maxResults=20&return=enriched.url.relations.relation.subject.keywords.keyword.sentiment.score').then(function(response){
// 		$scope.response = response;
// 		console.log($scope.response)
// 	}, function(error){
// 		console.log(error)
// 	});

}])

// https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=ba521ca99affd724697f4fb794058a432c3ecf0f&outputMode=json&outputMode=json&start=now-7d&end=now&maxResults=1&return=enriched,original

// enriched.url.entities.entity.quotations.quotation_.sentiment.score 
// enriched.url.relations.relation.subject.keywords.keyword.sentiment.score
// enriched.url.relations.relation.subject.sentiment.score
// enriched.url.relations.relation.object.entities.entity.sentiment.score

// q.enriched.url.title=SEARCHTERM&q.enriched.url.text=SEARCHTERM

// q.enriched.url.title=A[syria^turkey]&q.enriched.url.text=A[syria^iraq^war]

// https://gateway-a.watsonplatform.net/calls/data/GetNews?apikey=YOUR_APP_APIKEY&outputMode=json&start=now-1d&end=now&maxResults=10&q.enriched.url.enrichedTitle.taxonomy.taxonomy_=|label=business,score=%3E0.4|&return=enriched.url.url,enriched.url.title,enriched.url.text

// q.enriched.url.title=((baseball)%26%26(O[team^player]))