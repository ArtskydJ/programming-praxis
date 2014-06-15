//Joseph Dykstra
//2014-06-13

//Minimax Pandigital Factor
//http://programmingpraxis.com/2014/06/13/minimax-pandigital-factor/

//If you take all the numbers that contain the digits 1 to 9 exactly once, and
//you write down the prime factorization of all those numbers, which one has the
//smallest biggest prime factor?
//
//To illustrate what I mean, the number 879456123 contains the prime factors 3,
//7, 13 and 491; making 491 this numbers biggest prime factor.
//
//The number 213456789 contains 3 7 13 and 197 as factors, making 197 the biggest
//prime factor. Out of all the numbers I’ve tried, 213456789 has the smallest
//biggest prime factor.
//
//Many other number have much bigger biggest prime factors, like 576492813
//which contains 3 13 19 and 13649.

var HOW_MANY_DIGITS = 9  //5 -> nnnnn ... 10 -> nnnnnnnnnn
var START_DIGIT = 1
var COUNT_DIGITS = 10     //5 -> 0, 1, 2, 3, 4 ... 10 -> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

var aMath = require('array-math')
var elapsed = require('ns-elapsed')()

var smallest = Infinity
var ownsSmallest = 0
var count = 0
var i = []
while(i.length<HOW_MANY_DIGITS)
	i.push(1)

function notSame(array, index) {
	array = array.slice(0, index+1)
	var compare = array.pop()
	return array.every(function(ele) { return ele!==compare })
}

function chunk(ind, cb) {
	for(i[ind]=START_DIGIT; i[ind]<COUNT_DIGITS; i[ind]++) {
		if (notSame(i, ind)) {
			if (ind<HOW_MANY_DIGITS-1)
				chunk(ind+1, cb)
			else
				cb()
		}
	}
}

function largestFactor(n) {
	for (var i=Math.ceil(n/2); i>0; i--) {
		if ((n%i)==0)
			return i
	}
}
function largestFactor2(n) {
	for (var i=2; i<=n/2; i++) {
		if ((n%i)==0)
			return n/i
	}
	return 1
}
var elapsed2 = require('ns-elapsed')()
console.log(largestFactor2(500)) //should be 250
console.log(largestFactor2(505)) //should be 101
console.log(largestFactor2(29)) //should be 1
console.log(largestFactor2(123456789)) //should be 41152263
console.log(largestFactor2(123456798)) //should be ?
console.log(largestFactor2(123456879)) //should be ?
console.log(largestFactor2(123456897)) //should be ?
console.log(''+elapsed2.get()+'\n')
var elapsed3 = require('ns-elapsed')()
console.log(largestFactor(500)) //should be 250
console.log(largestFactor(505)) //should be 101
console.log(largestFactor(29)) //should be 1
console.log(largestFactor(123456789)) //should be 41152263
console.log(largestFactor(123456798)) //should be ?
console.log(largestFactor(123456879)) //should be ?
console.log(largestFactor(123456897)) //should be ?
console.log(''+elapsed3.get()+'\n')
if(0)
chunk(0, function() {
	//console.log(i.join(''))
	var z = largestFactor(parseInt(i.join('')))
	if (z<smallest) {
		smallest = z
		ownsSmallest = i.join('')
	}
	if ((count%100)==0) {
		console.log('c:%s, s:%d, o:%s, %d%%, t:%d', i.join(''), smallest, ownsSmallest, (count/362.88).toPrecision(2), elapsed.get())
	}
	count++
})

console.log('smallest: %d, came from: %s', smallest, ownsSmallest)
console.log('count:', count)
console.log('elapsed:', elapsed.get())
