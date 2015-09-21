angular.module('restaurant', []);
angular.module('restaurant');
angular.module('restaurant').controller('doubleD',['$scope', function($scope){



// var Quote = function(text, author){
// 	this.text = text || "placeholder text";	
// 	this.author = author || "placeholder author";
// }
// Quote.prototype.wordCount = function(){return this.text.split(' ').length}
// Quote.prototype.caps = function(){console.log(this.text.toUpperCase())}


var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
}
FoodItem.prototype.stringify = function(){
	return "This food is called "+ this.name + ".  It has "+this.calories+" calories."
}

var pizzaSlice = new FoodItem ("Pizza", 700, false, false, true)
var veganOrangeMuffins = new FoodItem("Gluten Free Orange Muffin", 250, true, true, false)
var snickers = new FoodItem("Snickers", 250, false, true, true)

// console.log(snickers.stringify())
// console.log(veganOrangeMuffins.stringify())
// console.log(pizzaSlice.stringify())



var Drink = function(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
}

var Plate = function(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
	this.isVegan = function(){
		for (var i=0; i<ingredients.length;i++){
			if (ingredients[i].vegan === false){
				return false;
			}
			else {return true}
		}
	}

	this.isGlutenFree = function(){
		for (var i=0; i<ingredients.length;i++){
			if (ingredients[i].glutenFree === false){
				return false;
			}
			else {return true}
		}
	}

	this.isCitrusFree = function(){
		for (var i=0; i<ingredients.length;i++){
			if (ingredients[i].citrusFree === false){
				return false;
			}
			else {return true}
		}
	}
}

var Order = function(plates){
	this.plates = plates;
}

var Menu = function(plates){
	this.plates = plates;
}

var Restaurant = function(name, description, menu){
	this.name = name;
	this.description = description;
	this.menu = menu;
}

var Customer = function(vegan, gf, cf){
	this.vegan = vegan || 0;
	this.gf = gf || 0;
	this.cf = cf || 0;
}


Drink.prototype.stringify = function(){
	return "This food is called "+ this.name + ".  It  is "+this.description+"."
}

Plate.prototype.stringify = function(){
	return "This food is called "+ this.name + ".  It  is "+this.description+"."
}

Order.prototype.stringify = function(){
	var platestring="Here are all the plates ";
	for (var i = 0; i<this.plates.length; i++){
		platestring += this.plates[i].name + " ";
	}
	return platestring;
	
}

Menu.prototype.stringify = function(){
	var platestring="Here are all the plates: ";
	for (var i = 0; i<this.plates.length; i++){
		platestring += this.plates[i].name + " ";
	}
	return platestring;
}

Restaurant.prototype.stringify = function(){
	return "Welcome to "+this.name+". "+this.description+menu.stringify()
}

Customer.prototype.stringify = function(){
	return "Your dietary preference is "+this.dietaryPreference;
}




var tortilla = new FoodItem("Tortilla", 200, false, false, true);
var burritoFilling = new FoodItem("Burrito Gluten Filler", 500, false, false, false);

var burritoPlate = new Plate("Burrito!", "Burrito plate of wonder.", 7.99, [tortilla, burritoFilling])

var guac = new FoodItem("Guac", 200, true, true, true)
var chips = new FoodItem("Chips", 700, true, true, true)
var guacamolePlate = new Plate("Guac Plate", "Delicious Guac Plate.  Mmm.", 4.99, [guac, chips])

var tequila = new FoodItem("Booze", 125, true, true, true)
var limeJuice = new FoodItem("Lime Juice", 125, true, true, false)
var marg = new Drink("Marg", "BOOZE", 5.99, [tequila, limeJuice])

$scope.menu = new Menu([guacamolePlate, burritoPlate])
$scope.restaurant = new Restaurant("Double Ds Mexican", "Where it's at.", $scope.menu)

// console.log(menu.stringify())	



// console.log(restaurant.stringify())

$scope.customerDD = new Customer ()
$scope.order = [];
$scope.total = 0;
$scope.canEat = []
$scope.addOrder = function(index){
	$scope.order.push($scope.menu.plates[index])
	// console.log($scope.order)
	$scope.total += $scope.menu.plates[index].price
	// console.log($scope.total)
}
console.log()
$scope.dietPref = function(){
	$scope.canEat=[]
	for (var i = 0; i < $scope.menu.plates.length; i++){
		console.log("loop goes")
		console.log($scope.menu.plates[i].isVegan())
	if (($scope.customerDD.vegan === true) && ($scope.menu.plates[i].isVegan()=== false)){
		// console.log("vegan")
		return false;
	}
	if (($scope.customerDD.gf === true) && ($scope.menu.plates[i].isGlutenFree()===false)){
		// console.log("gf")
		return false;
	}
	if (($scope.customerDD.cf === true) && ($scope.menu.plates[i].isCitrusFree() ===false)){
		// console.log("cf")
		return false;
	}
	$scope.canEat.push($scope.menu.plates[i])
	console.log($scope.canEat)
	}
	
	}
}


]);







