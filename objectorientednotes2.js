// var Monkey = function(name, color){
// 	this.name = name;
// 	this.color = color;
// }

// Monkey.prototype.climb = function(tree){
// 	console.log(this.name + ' climbs the '+tree+' tree.')
// }

// // var george = new Monkey('George', 'Navajo White')

// // george.climb('palm')

// // var FlyingMonkey = function(name, color, wingspan){
// // 	this.name = name;
// // 	this.color = color;
// // 	this.wingspan = wingspan;
// // }

// // FlyingMonkey.prototype.climb = function(tree){
// // 	console.log(this.name + ' climbs the '+tree+' tree.')
// // }
// // var evilGeorge = new FlyingMonkey('Evil George', 'Dodger Blue', 9)

// // FlyingMonkey.prototype.fly = function() {
// // 	console.log( this.name + " flew "+ (this.wingspan*10)+ " feet.");	
// // }



// // evilGeorge.fly()


// // =-=-=-=-=-=-=-==-=-=- ^ BAD CODE EX^ -=-=-=-=-=-=-=-=-=-=--=-
// //=-=-=-=-=-=- \/  better code ex \/  -=-=-=-=-=-=-=-=-=-=-=-

// var FlyingMonkey = function(name, color, wingspan){
// 	// this is impliccitely an empty object
// 	// 	Monkey(this)
// 	Monkey.call(this, name, color)
// 	this.wingspan = wingspan;
// }
// FlyingMonkey.prototype = new Monkey();  //allows you to use base classes methods.  will also make constructor property reference base classes constructor 
// FlyingMonkey.prototype.constructor = FlyingMonkey//addresses constructor conflict as cited above
// FlyingMonkey.prototype.fly = function() {
// 	console.log( this.name + " flew "+ (this.wingspan*10)+ " feet.");	
// }
// var evilGeorge = new FlyingMonkey('Evil George', 'Dodger Blue', 9)
// console.log(evilGeorge)

// evilGeorge.climb('oak')


//namespacing 
// encapsulate methods and variables.  eliminates global variables.  deconflicts between other developers - don't want variable names to collide. 
// ex. Angular - ONLY global variable.  jquery - all encapsulated in $.  all variable names available.



//privacy

//






















