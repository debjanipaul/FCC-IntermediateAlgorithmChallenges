/* Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and it has to be a 
string. These methods must be the only available means of interacting with the 
object.*/

const names = firstAndLast.split(' ');
let firstName = names[0];
let lastName = names[1];

this.getFirstName = function() {
    return firstName;
};

this.getLastName = function() {
    return lastName;
};

this.getFullName = function() {
    return `${firstName} ${lastName}`;
};

this.setFirstName = function(fname) {
    firstName = fname;
    return firstName;
};

this.setLastName = function(lname) {
    lastName = lname;
    return lastName;
};

this.setFullName = function(fullName) {
    const newFullName = fullName.split(' ');
    firstName = newFullName[0];
    lastName = newFullName[1];
    return `${firstName} ${lastName}`;
};

console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFirstName("Haskell"))
console.log(bob.getFullName());
console.log(bob.setLastName("Curry"));
console.log(bob.setFullName("Haskell Curry"));
console.log(Object.keys(bob).length);