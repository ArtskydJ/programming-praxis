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