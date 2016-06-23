// 1. Create a constructor function called Animal.
// Instances of Animal should have an own property called hungry set to true.
// All animals should inherit a function called eat that sets their property hungry to false.

function Animal () {
	this.hungry = true;
	this.eat = function () {
		return this.hungry = false;
	};
};


// 2a. Create a constructor function called Dog.
// The Dog prototype should inherit from Animal.
// Instances of Dog should have an own property says set to "woof".

function Dog (name) {
	this.name = name;
	this.says = 'woof';
};

Dog.prototype = Object.create(Animal.prototype);


// 2b. Create a constructor function called Cat.
// The Cat prototype should inherit from Animal.
// Instances of Cat should have an own property says set to "meow".

function Cat (name) {
	this.name = name;
	this.says = 'meow';
}

Cat.prototype = Object.create(Animal.prototype);


// 3. Add a method to the Animal prototype called speak that will return the value of an instance's says property with an exclamation mark appended. Write two assertions that prove your speak method works.

Animal.prototype.speak = function () {
	return this.says + '!';
};

var loki = new Dog('Loki');
var piggy = new Cat('Piggy');

console.assert(loki.speak() === 'woof!');
console.assert(piggy.speak() === 'meow!');


// 4. Create a constructor called KeepSecret. The constructor function should accept a parameter called secret. It should store this in a private variable (use a closure). Add a method to instances of KeepSecret called logSecret that returns the secret string.

function KeepSecret (secret) {
	var shhh = secret;
	this.logSecret = function () {
		return shhh;
	}
};

var secret = "I love Nickelback!";
var gossiper = new KeepSecret(secret);
console.assert(gossiper.logSecret() === secret);


// 5. Create a constructor called Key. Create another constructor called Safe.
// The Safe constructor should take two arguments. The first argument can be any piece of data to keep safe. This must be stored using a private variable like you did with KeepSecret. The second argument to the Safe constructor should be an instance of Key that you need to store it privately as well.
// Add a function to the Safe prototype called unlock that takes an instance of Key as the first argument. If the key matches the key that was used to create the Safe; then return the secret data.

function Key () {
	
};

function Safe (sensitive, key) {
	this.unlock = function (testKey) {
		if (key === testKey) {
			return sensitive;
		}
	}
};

var sensitive = "shhhhh!";

var rightKey = new Key();

var wrongKey = new Key();

var anotherKey = new Key();

var safe = new Safe(sensitive, rightKey);


console.assert(safe.unlock(wrongKey) !== sensitive);
console.assert(safe.unlock(rightKey) === sensitive);
console.assert(safe.unlock(anotherKey) !== sensitive);























