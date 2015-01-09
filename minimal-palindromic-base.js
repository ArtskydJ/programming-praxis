//Joseph Dykstra
//2014-08-06

//Minimal Palindromic Base
//http://programmingpraxis.com/2014/08/05/minimal-palindromic-base/

// Given an integer n > 2, find the minimum b > 1 for which n base b is a
// palindrome. For instance, n = 15 = 1111v2 = 120v3 = 33v4 = 30v5 = 23v6 =
// 21v7 = 17v8 = 16v9 = 15v10 = 14v11 = 13v12 = 12v13 = 11v14; of those, bases
// 2, 4 and 14 form palindromes, and the least of those is 2, so the correct
// answer is 2. Write a program that calculates the smallest base for which a
// number n is a palindrome.

function mpb(n) {
	var proceed = n>2
	var iter = 0
	while (proceed && iter<=36) {
		if (iter===0) {
			iter=2
		} else {
			iter++
		}
		var diffBaseArr = n.toString(iter).split('')
		var half = (diffBaseArr.length-1)/2
		var stack = []
		proceed = !diffBaseArr.every(function (opposite, index) {
			if (index<half) {
				stack.push(opposite)
				return true
			} else if (index===half) {
				return true
			} else {
				return opposite===stack.pop()
			}
		})
	}
	return (iter<=36 && iter>=2) ? iter : new Error('No palindrome found')
}

console.log(mpb(0))
console.log(mpb(10)) //should be 3
console.log(mpb(15)) //should be 2
console.log(mpb(18)) //should be 5
console.log(mpb(39)) //should be 12
console.log(mpb(42)) //should be 4
