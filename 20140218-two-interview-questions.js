/*
1) Given a number n, find the smallest 3-digit number such that the product of
its digits is equal to n. For example, given n = 100, the solution is 455.
*/
function smallestThreeDigit(t) {
	var result
	for (var i=9; i>=0; i--) {
		for (var j=9; j>=0; j--) {
			for (var k=9; k>=0; k--) {
				if (i*j*k === t)
					result = i*100 + j*10 + k
			}
		}
	}
	return result
}

console.log(smallestThreeDigit(648))

/*
2) Given two arrays, one with n items and one with n+2 items including the same
items as the array with n items plus two additional items, find the two
additional items. Assume none of the items are duplicates.
*/
function twoArrays(arr1, arr2) {
	var largeArr = []
	var smallArr = []
	if (arr1.length > arr2.length) {
		largeArr = arr1
		smallArr = arr2
	} else {
		largeArr = arr2
		smallArr = arr1
	}

	var result = []
	largeArr.forEach(function (val) {
		if (!smallArr.some(function (val2) {return val===val2})) result.push(val)
	})
	
	return result
}

var array1 = [4, 8, 15, 16, 23, 42]
var array2 = [42, 16, 0, 15, 4, 50, 23, 8]

console.log(twoArrays(array1, array2))
