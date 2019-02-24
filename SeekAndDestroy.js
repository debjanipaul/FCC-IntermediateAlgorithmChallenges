//You will be provided with an initial array (the first argument in the destroyer function), 
//followed by one or more arguments. Remove all elements from the initial array that are of the same value as 
//these arguments.

// Note
// You have to use the arguments object.

function destroyer(arr) {
  var newArr = [];
  var args = Array.prototype.slice.call(arguments);
  
  arr.forEach(function(val) {
    if(args.indexOf(val) === -1) {
      newArr.push(val);
    }  
  });
  return newArr; 
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//Alternate solution

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}