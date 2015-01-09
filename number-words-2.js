//Joseph Dykstra
//2014-07-29

//Number Words
//http://programmingpraxis.com/2014/06/13/minimax-pandigital-factor/

// Given a positive integer, return all the ways that the integer can be
// represented by letters using the mapping 1 -> A, 2 -> B, …, 26 -> Z. For
// instance, the number 1234 can be represented by the words ABCD, AWD and LCD.
// Write the program to generate words from numbers.

function textMap(n) {
	var m = n - 1
	m > 25 && m = 25
	m < 0 && m = 0
	return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[m]
}

var array = process.argv //e.g. [1, 2, 3, 4]
	.slice(2)
	.filter(/^[0-9]+$/.test)[0]
	.split('')
	.map(Number)

// moar logic goes here
var sets = array

sets.forEach(function (ele) {
	console.log( ele.map(textMap).join('') )
})
