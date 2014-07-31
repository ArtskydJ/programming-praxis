//Joseph Dykstra
//2014-07-29

//The Next Palindrome
//http://programmingpraxis.com/2009/05/22/the-next-palindrome/

// A positive integer is called a palindrome if its representation in the
// decimal system is the same when read from left to right and from right to
// left. For a given positive integer K of not more than 1000000 digits, write
// the value of the smallest palindrome larger than K to output. Numbers are
// always displayed without leading zeros.
// Write a function that calculates the next palindrome larger than its input.

//GET ARGUMENT
var args = Array.prototype.slice.call(process.argv, 2) //gets arguments from process.argv
args = args.filter(function (ele) { //Keeps the arguments that have only numbers...
	return (!/[^0-9]/.test(ele) && /[0-9]/.test(ele)) //...and have at least one number
})
if (args.length===0) {
	throw new Error('Invalid arguments. Arguments must be positive numbers.')
}

var startNumber = parseInt(args[0]) //remember starting number!
//take the first element, split it into an array of characters, and use it:
args = args[0].split('').map(function (ele) { return parseInt(ele) })

for(var i=Math.ceil(args.length/2); i<args.length; i++) {
	args[i] = args[args.length - i - 1] //set last half to reverse of front half
}

if (parseInt(args.join(''))<startNumber) { //if new number is smaller than end number:
	var half = Math.ceil(args.length / 2)-1 //find halfway digit(s)
	args[half]++ //add one to the middle number
	if ((args.length % 2) === 0) { //if args length is even...
		args[half+1]++ //...add one to the other middle number
	}
}

//SHOW OUTPUT
console.log(parseInt(args.join('')))