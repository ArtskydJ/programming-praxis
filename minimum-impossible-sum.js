// Minimum Impossible Sum

// Given a list of positive integers, find the smallest number that cannot be
// calculated as the sum of the integers in the list. For instance, given the
// integers 4, 13, 2, 3 and 1, the smallest number that cannot be calculated as
// the sum of the integers in the list is 11.

function isPositiveInt(n) {
	return n > 0 && Math.floor(n) === n && isFinite(n)
}

function generateSequences(levels) {
	var result = []
	for (var i = 0; i < Math.pow(2, levels); i++) {
		var arr = i.toString(2).split('').map(Number)
		while (arr.length < levels) {
			arr.unshift(0)
		}
		result.push(arr)
	}
	return result
}

function isPossible(n) {
	return sequences.some(function (sequence) {
		var sum = 0
		for (var i = 0; i < list.length; i++) {
			sum += (list[i] * sequence[i])
		}
		return n === sum
	})
}


var list = process.argv.slice(2).map(Number).filter(isPositiveInt)
var sequences = generateSequences(list.length)
for (var n = 0; isPossible(n); n++) {}
console.log(n)
