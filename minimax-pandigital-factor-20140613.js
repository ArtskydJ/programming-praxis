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

var HOW_MANY_DIGITS = 5  //5 -> nnnnn ... 10 -> nnnnnnnnnn
var COUNT_DIGITS = 10     //5 -> 0, 1, 2, 3, 4 ... 10 -> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

var aMath = require('array-math')
var elapsed = require('ns-elapsed')()

var smallest = Infinity
var ownsSmallest = 0
var count = 0
var i = []
while(i.length<HOW_MANY_DIGITS)
	i.push(0)

function notSame(array, index) {
	array = array.slice(0, index+1) //+1?
	var compare = array.pop()
	return array.every(function(ele) { return ele!==compare })
}

function chunk(array, index, cb) {
	for(i[index]=0; i[index]<COUNT_DIGITS; i[index]++) {
		if (notSame(i, index)) {
			cb()
		}
	}
}

chunk(i, 0, function() {
	chunk(i, 1, function() {
		chunk(i, 2, function() {
			chunk(i, 3, function() {
				chunk(i, 4, function() {
					//console.log(i.join(''))
					var z = aMath.factors(parseInt(i.join(''))).pop()
					if (z<smallest) {
						smallest = z
						ownsSmallest = i.join('')
					}
					count++
				})
			})
		})
	})
})

console.log('smallest: %d, came from: %s', smallest, ownsSmallest)
console.log('count:', count)
console.log('elapsed:', elapsed.get())
