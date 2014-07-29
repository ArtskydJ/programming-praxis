//Joseph Dykstra
//2014-03-13

//Three Interview Questions
//http://programmingpraxis.com/2014/05/13/three-interview-questions-2/

// 1) Consider a sorted singly-linked list having the following nodes:
// 10 -> 30 -> 50 -> 70 -> NULL. You are given a pointer to node 50 and a new
// node having the value 40. Can you insert node 40 correctly in the list
// maintaining the ascending order?



// 2) Given a linked list 5 -> 4 -> 3 -> 2 -> 1 produce a linked list
// 4 -> 2 -> 0 -> 2 -> 1 by subtracting the last node of the list from the
// first, the next-to-last node from the second, and so on, stopping at the
// midpoint of the list.



// 3) Write a program to output the number of consecutive trailing zeros in the
// factorial of a number. For example, if the number is 5, then 5! = 120, and
// there is one trailing zero.

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
//Tests...
	
console.log(factorial(5))	//120
console.log(factorial(6))	//720
console.log(factorial(7))	//5040
console.log(factorial(8))	//40320

console.log(trailingZeros(560))		//1
console.log(trailingZeros(7007))	//0
console.log(trailingZeros(304400))	//2
console.log(trailingZeros(177000))	//3
*/
