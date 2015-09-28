// name
// age
// bulgyEyes
// color
// length
// weight
// tailDetachibility
// sexualOrientation
// genderIdentity

// var Iguana = function(name, color, bulgyEyes, tubbiness){

// 	this.name = name; //OBJECT that lives inside every function (?)
// 	this.color = color;//each is KEY for the object
// 	this.bulgyEyes = bulgyEyes;
// 	this.tubbiness = tubbiness;
// 	this.eat = function(){ // eat will be a callable property
// 		// console.log(this) // the value pof this is the object itself
// 		console.log(this.name +' is eating...')
// 	}
// 	// under the hood.  w/out return statement, functions return undefinied.
// 	// with 'new' keywork, returns 'this' instead of undefinied. 

// }

// // var myArray = [1,2,3]
// // myArray.join() //callable property for all arrays.  

// var chubChub = new Iguana('ChubChub', 'Aquamarine', true, true)
// console.log(chubChub)

// // var myFunc = function(){
// // 	console.log(this)
// // } //shows window properties 

// //window.myIguana will display 

// var herbert = new Iguana('Herbert', 'Brown', false, true)
// console.log(herbert)	



// IN CLASS CHALLENGE - create a quotation class and constructor function.  
// 2 properties.

// var Quote = function(text, author){
// 	this.text = text || "placeholder text";	
// 	this.author = author || "placeholder author";
// }
// Quote.prototype.wordCount = function(){return this.text.split(' ').length}
// Quote.prototype.caps = function(){console.log(this.text.toUpperCase())}


// var myQuote = new Quote('War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself.', 'John Stuart Mill')


var Iguana = function(name, color, bulgyEyes, tubbiness){

	this.name = name; //OBJECT that lives inside every function (?)
	this.color = color;//each is KEY for the object
	this.bulgyEyes = bulgyEyes;
	this.tubbiness = tubbiness;
	// this.eat = function(){ // eat will be a callable method
	// 	// console.log(this) // the value pof this is the object itself
	// 	console.log(this.name +' is eating...')// gets created for every iteration of object!  
	Iguana.count = Iguana.count || 0;
	Iguana.count++   // establishes property .count

}
// 	// under the hood.  w/out return statement, functions return undefinied.
// 	// with 'new' keywork, returns 'this' instead of undefinied. 

// //methods/properties.  

// // var myArray = [1,2,3]
// // myArray.join() //callable property for all arrays.  

var chubChub = new Iguana('ChubChub', 'Aquamarine', true, true)
console.log(chubChub)

// // var myFunc = function(){
// // 	console.log(this)
// // } //shows window properties 

// //window.myIguana will display 

// var herbert = new Iguana('Herbert', 'Brown', false, true)
// console.log(herbert)	
// console.log(Iguana.count)

// Iguana.prototype.eat = function(){
// 	console.log(this.name +' is eating.  Yummy.')  //  all instances of Iguana class will have acess to eat method!
	

// CHALLENGE NUMBER TWO

// update quote class to have 2 methods to prototype
	// method to count the words in the quote
	// method to console log an uppercase version of the quote

// var Burglar = function(name, which){
// 	this.name = name + which;
// 	this.dexterity = Math.ceil(Math.random()*10);
// 	this.ninja = this.dexterity>7;
// 	this.stuff = ['diamonds', 'cash', 'guns', 'dagger of +3 dexterity', 'glass eyeball'];
// }





// Burglar.prototype.burgle = function(victim){
// 	if (victim.stuff.length !==0){
// 	this.stuff.push(victim.stuff.pop())
// 	console.log(this.name + ' now has ' + this.stuff.join (', ')+'.')
// 	console.log(victim.name + ' now has ' + victim.stuff.join (', ')+'.')
// 	console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
// }
// else{
// 	cityOfThieves.splice(victim.which, 1)
// 	console.log("hasta la vista, "+victim.name)
// 	console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=")
// }
// }
// // var steve = new Burglar('Steve', 4, false)
// // // console.log(steve)

// // var otherDanielle = new Burglar('Danielle', 10, true)

// // steve.burgle(otherDanielle)
// // steve.burgle(otherDanielle)
// // steve.burgle(otherDanielle)
// // otherDanielle.burgle(Steve)

// var cityOfThieves = []
// for(var i = 0; i<20; i++){
//  cityOfThieves.push(new Burglar('steve', i))
// }

// var randomBurgle = function(){
// 	var burglar = cityOfThieves[Math.floor(Math.random()*cityOfThieves.length)]
// 	var victim = cityOfThieves[Math.floor(Math.random()*cityOfThieves.length)]
// 	burglar.burgle(victim)
// }

// var burgleInterval = setInterval(function(){
// 	randomBurgle()
// }, 50)


fizzBuzz = function(){
	for (var i = 0; i<100; i++){
		if(i%15===0){
			
			console.log( "fizzbuzz")
		}
		else if(i%5===0){
			console.log("Fizz") 
		}
		else if(i%3===0){
			console.log("Buzz") 
		}
		else{console.log(i)}
	}
}


console.log(fizzBuzz())


primeNumber = function(){
	for (var i = 2; i<1000;i++){
		var isPrime = true;
		for(var j = 2; j<i; j++){
			if (i%j===0){
			isPrime = false;
			}
		}
	if (isPrime===true){
		console.log(i+" is Prime.")
	}
	}
}


primeNumber()









