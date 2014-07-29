//Joseph Dykstra
//2014-07-29

//Number Words
//http://programmingpraxis.com/2014/06/13/minimax-pandigital-factor/

// Given a positive integer, return all the ways that the integer can be
// represented by letters using the mapping 1 -> A, 2 -> B, …, 26 -> Z. For
// instance, the number 1234 can be represented by the words ABCD, AWD and LCD.
// Write the program to generate words from numbers.

//GET ARGUMENT
var args = Array.prototype.slice.call(process.argv, 2) //gets arguments from process.argv
args = args.filter(function (ele) { //Keeps the arguments that have only numbers...
	return (!/[^0-9]/.test(ele) && /[0-9]/.test(ele)) //...and have at least one number
})

//take the first element, split it into an array of characters, and use it:
args = args[0].split('').map(function (ele) { return parseInt(ele) })

//MAKE SETS
var fullSets = [] //in the form of [ [1,2,3,4], [12,3,4], [1,23,4] ]
var partSets = [] //in the form of [ {instead: 0, use: 12}, {instead: 1, use: 23} ]
fullSets.push(args)

for(var i = 0; i<args.length-1; i++) { //loop through all args except last arg

	var both = (args[i] * 10) + args[i+1] //tens place plus ones place

	if ( both >=10 && both <= 26 ) {
		partSets.push({
			instead: i,
			use: both
		})
	}
}



console.log(partSets)

//SHOW OUTPUT
console.log(args)