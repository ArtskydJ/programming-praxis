// Joseph Dykstra
// 2015-08-04

// Three Homework Problems
// http://programmingpraxis.com/2015/08/04/three-homework-problems/

// 1. Write a function that takes as input three positive integers and finds
//    the sum of the squares of the two largest of the three.
// 2. Write a function that takes a positive integer as input and determines if
//    it is a base-10 palindrome.
// 3. Write a function that takes a positive integer as input and determines
//    the number of trailing zeroes in the output of that number’s factorial.

function one(x, y, z) {
	function s(x) { return x * x }
	return s(x) + s(y) + s(z) - s(Math.min(x, y, z))
}

function two(n) {
	return n.toString() === n.toString().split('').reverse().join('')
}

function three(n) {
	return /0*$/.exec(n)[0].length
}

function assert(a, b) {
	if (a !== b) throw new Error(a + ' !== ' + b)
}

assert(one(2, 3, 4), 25)
assert(one(3, 3, 4), 25)

assert(two(101), true)
assert(two(0), true)
assert(two(-10), false)

assert(three(10), 1)
assert(three(100), 2)
assert(three(10001), 0)
assert(three(100010), 1)
