//Joseph Dykstra
//2014-11-25

//An Array Of Zeroes
//http://programmingpraxis.com/2014/11/21/an-array-of-zeroes/

// You are given an array of integers. Write a program that moves all non-zero
// integers to the left end of the array, and all zeroes to the right end of
// the array. Your program should operate in place. The order of the non-zero
// integers doesn’t matter. For example, given the input array [1,0,2,0,0,3,4],
// your program should permute the array to [1,4,2,3,0,0,0] or something
// similar, and return the value 4.

var Elapsed = require('ns-elapsed')

function sortZeroes(arr) {
	return arr.sort(Math.abs).reverse().filter(Boolean).length
}

var n, arr, go=true, time = Elapsed()
for(n=0;time.get()<1;n++) {
	arr = [1,0,2,0,0,3,-4]
	sortZeroes(arr)
}
console.log(n)
console.log(time.get())
console.log(arr) //should be [1,-4,2,3,0,0,0], or similar
console.log(sortZeroes(arr))//should be 4