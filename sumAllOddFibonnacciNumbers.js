/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or 
equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence 
is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 
3, 5 and 8. */


function sumFibs(num) {
    let newNum = [1, 1]
    let sum = 0
    for (var i = 0; i < num - 2; i++) {
        newNum.push(newNum[i] + (newNum[i + 1]));
    }
    for (var j = 0; j < newNum.length; j++) {
        if (newNum[j] % 2 !== 0 && newNum[j] <= num) {
            sum += newNum[j];
        }
    }
    return sum;
}

sumFibs(4);
sumFibs(75025);