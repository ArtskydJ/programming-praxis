//Joseph Dykstra
//2014-05-23

//Amicable Chains
//http://programmingpraxis.com/2014/05/20/amicable-chains/

// A perfect number is equal to the sum of its proper divisors; for instance,
// the divisors of 28 are 1, 2, 4, 7, and 14, and 1 + 2 + 4 + 7 + 14 = 28, so 28
// is a perfect number. Two numbers m and n form an amicable pair if the sum of
// the divisors of m equals n and the sum of the divisors of n equals m; for
// instance, 220 has divisors 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110 which sum
// to 284, and 284 has divisors 1, 2, 4, 71, 142 which sum to 220, so 220 and
// 284 form an amicable pair. An amicable chain is a list of numbers, each the
// sum of the divisors of the previous number, that loops so that the sum of the
// divisors of the last number in the list is the first number in the list; for
// instance, the numbers 12496, 14288, 15472, 14536, and 14264 form an amicable
// chain of length 5, since sum-div(12496) = 14288, sum-div(14288) = 15472,
// sum-div(15472) = 14536, sum-div(14536) = 14264, and sum-div(14264) = 12496.


//Returns an array of a number's divisors
var aMath = require('array-math')

function findPerfectNumbers(limit) {
	for (var i=0; i<=limit; i++)
		if (i == aMath.sum(aMath.divisors(i, {proper:true})))
			console.log(i)
}

findPerfectNumbers(10000)
