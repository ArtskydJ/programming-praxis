//Joseph Dykstra
//2014-07-29

//Number Words
//http://programmingpraxis.com/2014/06/13/minimax-pandigital-factor/

// Given a positive integer, return all the ways that the integer can be
// represented by letters using the mapping 1 -> A, 2 -> B, …, 26 -> Z. For
// instance, the number 1234 can be represented by the words ABCD, AWD and LCD.
// Write the program to generate words from numbers.

//PREREQUISITS
var util = require('util')
var deepEqual = require('deep-equal')
var LOUD = 1 //0: silent, 1: quiet, 2: noise, 3: noisy, 4: racket


//FUNCTIONS
function findDouble(arr) {
	var found = false
	var copies = []
	if (LOUD>=3) console.log("in:", arr)
	for (var ind=0; ind<arr.length-1; ind++) { //if valid mesh...
		if (arr[ind]*10 + arr[ind+1] <= 26 && arr[ind+1]<10 && arr[ind]>0) {
			var newCopy = arr.slice()
			newCopy[ind] = arr[ind]*10 + arr[ind+1] //...then mesh them
			newCopy = newCopy.filter(function (el, indexCopy, ar) {return indexCopy != ind+1})
			copies.push(newCopy) //add copy to full sets arr
			if (LOUD>=3) console.log("queue:", newCopy)
			found = true
		}
	}
	return {found:found, copies:copies}
}

function myself(bigArrOrigin) {
	var fd = {}
	var bigArr = bigArrOrigin.slice()
	bigArr.forEach( function (ele) {
		fd = findDouble(ele)
		if (fd.found) {
			bigArr.push(fd.copies)
			if (LOUD>=3) console.log("push:", fd.copies)
			bigArr.push(myself(fd.copies))
		}
	})
	return bigArr
}

function flatten (theGiantArr) {
	var firstGiantArr = theGiantArr.slice() //copy
	function notFlattened(arr) {
		return arr.some(function (e) {return e.some(util.isArray) })
	}
	while(notFlattened(firstGiantArr)) {            //fga  ele  e e   ele  ele ele fga
		firstGiantArr.forEach(function (ele, ind) { // [    [   [][]   ],   [   ]   ]
			var eleHasArrs = false
			ele.forEach(function (e) {
				if (util.isArray(e)) {
					firstGiantArr.push(e)
					eleHasArrs = true
				}
			})
			if (eleHasArrs) {
				firstGiantArr = firstGiantArr.filter(function (e, index) {
					return index!==ind
				})
			}
		})
	}
	return firstGiantArr
}

function removeDuplicateArrays(arrOfArrs) { //not the most efficient, but not too bad
	return arrOfArrs.filter(function (ea, now) {
		return !arrOfArrs.slice(0, now).some(function (er) { //every, w/o !
			return deepEqual(ea, er) //duplicate element? //w/ !
		})
	})
}

function removeArraysWith0s(arrOfArrs) { //bigarr.filter(ele.every(not0))
	return arrOfArrs.filter(function (ele) {
		return ele.every(function (el) {
			return el !== 0
		})
	})
}

function textMap(n) {
	var m = Math.round(n-1)
	return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice('')[m<=25?(m>=0?m:0):25]
}

//GET ARGUMENT
var args = Array.prototype.slice.call(process.argv, 2) //gets arguments from process.argv
args = args.filter(function (ele) { //Keeps the arguments that have only numbers...
	return (!/[^0-9]/.test(ele) && /[0-9]/.test(ele)) //...and have at least one number
})

//take the first element, split it into an array of characters, and use it:
args = args[0].split('').map(function (ele) { return parseInt(ele) }) //in the form of [1,2,3,4]

//MAKE SETS
var sets = [args]
	if (LOUD>=3) console.log("start:\n",sets)

sets = myself(sets) //in the form of [ [1,2,3,4], [12,3,4], [1,23,4] ] //returns new
	if (LOUD>=4) console.log("recursive find:\n",sets)

var b4 = sets.slice()
sets = flatten(sets) //returns new
	if (LOUD>=4) console.log("flattened:\n",sets)
	if (LOUD>=2) console.log((deepEqual(b4, sets)?"Uns":"S") + "uccessful Flatten")

b4 = sets.slice() //copy
sets = removeDuplicateArrays(sets) //returns new
	if (LOUD>=3) console.log("duplicates removed:\n",sets)
	if (LOUD>=2) console.log((deepEqual(b4, sets)?"Uns":"S") + "uccessful Duplicate Removal")

b4 = sets.slice() //copy
sets = removeArraysWith0s(sets) //returns new
	if (LOUD>=3) console.log("arrays with '0's removed:\n",sets)
	if (LOUD>=2) console.log((deepEqual(b4, sets)?"Uns":"S") + "uccessful '0's Removal")

//SHOW OUTPUT
sets.forEach(function (ele) {
	if (LOUD>=1) console.log( ele.map(textMap).join('') )
})
