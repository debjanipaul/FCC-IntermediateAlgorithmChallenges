/* Create a function that sums two arguments together. If only one 
argument is provided, then return a function that expects one argument 
and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a 
function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */

function addTogether() {
    var len = arguments.length;
    var a = arguments[0];
    var b = arguments[1];

    if (len === 1 && typeof(a) == 'number') {
        return function(x) {
            if (typeof(x) == 'number') {
                return a + x;
            }
        };
    } else if (len === 2 && typeof(a) == 'number' && typeof(b) == 'number') {
        return a + b;
    } else if (typeof(b) !== 'number') {
        return undefined;
    }
}

console.log(addTogether(2, 3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2)(3));
console.log(addTogether(2)([3]));
console.log(addTogether(2, "3"));