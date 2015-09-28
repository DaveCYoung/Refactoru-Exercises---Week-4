
angular.module('exModule', []);
angular.module('exModule');
angular.module('exModule').controller('mainController', ['$scope', '$http', function($scope, $http){

$scope.color = "#000000"
$scope.actors = []
$scope.relations = []
$scope.click = function(x){
	console.log($scope.relations[x])
}
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

$scope.actors.push(new SingleActor('Iraqi Government','q.enriched.url.title=A[iraq^government]&'))
$scope.actors.push(new SingleActor('Syrian Government','q.enriched.url.title=O[syria^assad]&'))
$scope.actors.push(new SingleActor('ISIL','q.enriched.url.title=O[isil^isis^((islamic)%26%26(state))]&'))
$scope.actors.push(new SingleActor('Iraqi Kurdistan','q.enriched.url.title=A[(iraq)^(O[kurds^kurdistan^pkk])]&'))
$scope.actors.push(new SingleActor('Syrian Kurds','q.enriched.url.title=A[syria^(O[kurds^ypg])]&'))
$scope.actors.push(new SingleActor('Al Nusra Front','q.enriched.url.title=A[nusra^front]&'))
$scope.actors.push(new SingleActor('Iran, Paramilitary, Aligned Militias','q.enriched.url.title=O[iran^hezbollah^irgc^quds^(A[shia^militia])]&'))
$scope.actors.push(new SingleActor('Turkey','q.enriched.url.title=O[turkey^turkish]&'))
$scope.actors.push(new SingleActor('United States','q.enriched.url.title=O[us^(A[united^states])^american]&'))
$scope.actors.push(new SingleActor('Russia','q.enriched.url.title=O[russia^russian]&'))
$scope.actors.push(new SingleActor('Saurdi Arabia and Arab Coalition','q.enriched.url.title=O[saudi^(A[arab^coalition])]&'))

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

// console.log($scope.relations)


$scope.colorSelect();
console.log($scope.color)



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