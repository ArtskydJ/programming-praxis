//Joseph Dykstra
//2014-04-11

//Counting Zeros
//http://programmingpraxis.com/2014/01/07/counting-zeros/

// For a given n, count the total number of zeros in the decimal representation
// of the positive integers less than or equal to n. For instance, there are 11
// zeros in the decimal representations of the numbers less than or equal to
// 100, in the numbers 10, 20, 30, 40, 50, 60, 70, 80, 90, and twice in the
// number 100. Expect n to be as large as 10^10,000.

var run =   [11, 100, 111, 1000, 1111, 10000, 11111]

function countZeros(n) {
	var result = 0
	for (var i=1; i<=n; i++) {
		result += i.toString().split("").filter(function (x) {return x==="0"}).length
	}
	return result
}

for (var num=0; num<run.length; num++) {
	console.log("try %d:\t%d", run[num], countZeros(run[num]))
}
