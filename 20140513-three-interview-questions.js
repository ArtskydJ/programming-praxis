//Joseph Dykstra
// http://programmingpraxis.com/2014/05/13/three-interview-questions-2/

// #3: Write a program to output the number of consecutive trailing zeros in the factorial of a number. For example, if the number is 5, then 5! = 120, and there is one trailing zero.





var factorialTrailingZeros = function(n) {

	function factorial(n) {
		for (i=n-1; i>1; i--) n*=i
		return n
	}

	function trailingZeros(n){
		return n.toString().split('').reduceRight(function(memo, curr) {
			if (curr==='0' && memo.again)
				memo.count++
			else
				memo.again = false
			return memo
		}, { count: 0, again: true }).count
	}
	
	
	return trailingZeros(factorial(n))
}

console.log(factorialTrailingZeros(5))  // => 1
console.log(factorialTrailingZeros(10)) // => 2
console.log(factorialTrailingZeros(20)) // => 4

/*
console.log(factorial(5))	//120
console.log(factorial(6))	//720
console.log(factorial(7))	//5040
console.log(factorial(8))	//40320

console.log(trailingZeros(560))		//1
console.log(trailingZeros(7007))	//0
console.log(trailingZeros(304400))	//2
console.log(trailingZeros(177000))	//3
*/
