angular.module('Module', []);
angular.module('Module');
angular.module('Module').controller('mainController',['$scope', function($scope){
$scope.addQuoteVisible = false;
$scope.quotationentry = '';
$scope.authorentry = '';
$scope.temprating = [];

var sortbyrating = function(){$scope.displayquotelist.sort(function(a, b){
	if(a.rating < b.rating){
		return 1
	}
	if(a.rating > b.rating){
		return -1
	}
	return 0
	})}


$scope.quotelist = [{
	author: "Albert Camus",
	quotation: "Live to the Point of Tears",
	rating: 0
}, {
	author: "John Stuart Mill",
	quotation:"War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself.",
	rating: 0
},{
	author: "Albert Camus",
	quotation:"You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
	rating:0
}]

$scope.displayquotelist = $scope.quotelist.slice(0)

sortbyrating()

var Quote = function(quotation, author){
	this.quotation = quotation;
	this.author = author;
	this.rating = 0;
}

$scope.addclick = function(){$scope.addQuoteVisible = true}

$scope.quotesubmit = function(){
	var newQuote = new Quote($scope.quotationentry, $scope.authorentry)
	$scope.quotelist.push(newQuote)
	$scope.displayquotelist = $scope.quotelist
	sortbyrating()
}

$scope.deleteprompt = false;

$scope.deletefunction= function($index){
	$scope.displayquotelist.splice($index, 1)
	$scope.deleteprompt = true;
	console.log($scope.quotelist)
}

$scope.deleteperm = function(){
	console.log($scope.quotelist)
	$scope.quotelist= $scope.displayquotelist;
	console.log($scope.quotelist)
	$scope.deleteprompt = false;
}
$scope.undelete = function(){
	console.log($scope.quotelist)
	$scope.displayquotelist = $scope.quotelist;
	console.log($scope.quotelist)
	$scope.deleteprompt = false;
}


$scope.authorsort = function($index){
	$scope.displayquotelist = []
	for(var i = 0; i < $scope.quotelist.length; i++){
		if ($scope.quotelist[i].author === $scope.quotelist[$index].author){
			$scope.displayquotelist.push($scope.quotelist[i])
			}
		}
	sortbyrating()	
	}

$scope.submitrating = function($index){
	$scope.displayquotelist[$index].rating = $scope.temprating[$index]
	for(var i = 0; i<$scope.quotelist.length; i++){
		if ($scope.displayquotelist[$index].quotation === $scope.quotelist[i].quotation){
			$scope.quotelist[i].rating = $scope.displayquotelist[$index].rating;
			console.log($scope.quotelist[i])
		}
	}
sortbyrating()
}
$scope.showall = function(){$scope.displayquotelist = $scope.quotelist}

$scope.randomquote = $scope.quotelist[Math.round(Math.random()*$scope.quotelist.length)].quotation

$scope.showrandomquote = false













}])