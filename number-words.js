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

//FUNCTIONS
function findDouble(arr, addTo) {
	var found = false
	console.log("input:", arr)
	for (var ind=0; ind<arr.length-1; ind++) { //if valid mesh...
		if (arr[ind]*10 + arr[ind+1] <= 26) {
			var newCopy = arr.slice()
			newCopy[ind] = arr[ind]*10 + arr[ind+1] //...then mesh them
			newCopy = newCopy.filter(function (el, indexCopy, ar) {return indexCopy != ind+1})
			addTo.push(newCopy) //add copy to full sets arr
			//console.log("add:", newCopy)
			found = true
		}
	}
	return found
}

//*
function myself(bigArr) {
	var newArr = []
	bigArr.forEach( function (ele) {
		if (findDouble(ele, newArr)) {
			any = true
			bigArr.push(newArr)
			console.log("add:", newArr)
			myself(newArr)
		}
	})
}
//*/

function flatten (theGiantArr) {
	var firstGiantArr = theGiantArr.slice() //copy
	function notFlattened(arr) {
		return arr.some(function (e) {return e.some(util.isArray) }) //bind?
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

function removeDuplicateArrays(arrOfArrs) { //slow
	return arrOfArrs.filter(function (ea, now) {
		return !arrOfArrs.slice(0, now).some(function (er) {
			return deepEqual(ea, er) //duplicate element?
		})
	})
}

function removeDuplicateArrays_FAST(arrOfArrs) { //fast
	var result = []
	var lastEntry = []
	arrOfArrs.forEach(function (arrayEle) {
		if ( lastEntry != arrayEle && //not same as last entry
			!result.some(function (resultEle) { //no duplicates
				return deepEqual(arrayEle, resultEle) //duplicate?
			})
		) { //if different
			result.push(arrayEle) //add to result
		}
		lastEntry = arrayEle
	})
	return result
}
//3.133 slow
//2.658 fast
//0.475 diff

//GET ARGUMENT
var args = Array.prototype.slice.call(process.argv, 2) //gets arguments from process.argv
args = args.filter(function (ele) { //Keeps the arguments that have only numbers...
	return (!/[^0-9]/.test(ele) && /[0-9]/.test(ele)) //...and have at least one number
})

//take the first element, split it into an array of characters, and use it:
args = args[0].split('').map(function (ele) { return parseInt(ele) }) //in the form of [1,2,3,4]

//MAKE SETS
var fullSets = [] //in the form of [ [1,2,3,4], [12,3,4], [1,23,4] ]
console.log("found some:", findDouble(args, fullSets))
myself(fullSets) //modifies itself
fullSets = flatten(fullSets) //returns new
var elapsed = require('ns-elapsed')()
var newFullSets = removeDuplicateArrays(fullSets) //returns new
console.log("time: ",elapsed.get())
console.log(deepEqual(fullSets, newFullSets)?"equal":"changed")
//SHOW OUTPUT
require('fs').writeFileSync('giantArr.txt', util.inspect(newFullSets, {depth:null}))
//console.log(util.inspect(fullSets, {depth:null}))