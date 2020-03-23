/* A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast,
4 is not prime since it is divisible by 1, 2 and 4.*/

function sumPrimes(num) {
  let myList = []
  let myNum = 0
  for(let i=2; i<=num; i++) {
    let isPrime = true;

    for( let j=2; j<=i; j++) {
      if(i%j===0 && j!==i){
        isPrime = false
      }
    }
    if(isPrime) {
      myList.push(i)
    }
  }
  for(let n = 0; n<myList.length; n++) {
    myNum = myNum + myList[n]
  }
  return myNum;
}

sumPrimes(10);
sumPrimes(977);
