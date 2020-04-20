var Person = function(firstAndLast) {
	// Complete the method below and implement the others similarly
	var firstName, lastName;
	var splittedName = function(name) {
		name = name.split(' ');
		firstName = name[0];
		lastName = name[1];
		return firstName, lastName;
	};
	splittedName(firstAndLast);
	this.getFullName = function() {
		return firstName + ' ' + lastName;
	};
	this.getFirstName = function() {
		return firstName;
	};
	this.getLastName = function() {
		return lastName;
	};
	this.setFirstName = function(first) {
		firstName = first;
		return firstName;
	};
	this.setLastName = function(last) {
		lastName = last;
		return lastName;
	};
	this.setFullName = function(full) {
		return splittedName(full);
	};
	return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
bob.getFirstName();
bob.getLastName();
bob.setFirstName('John');
bob.setLastName('Cena');
bob.setFullName('Harry Potter');
