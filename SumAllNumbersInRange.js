
//We'll pass you an array of two numbers. Return the sum of those two numbers plus the 
//sum of all the numbers between them.

function sumAll(arr) {
  
 count = 0;
  
 let min = Math.min(...arr);
 let max = Math.max(...arr);
  
  for(var i = min; i <= max; i++){ 
     count += i;
  }
  
 return count;
}

sumAll([1, 4]);
sumAll([5, 10]);// should return 45.