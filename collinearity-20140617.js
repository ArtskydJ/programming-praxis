//Joseph Dykstra
//2014-06-18

//Collinearity
//http://programmingpraxis.com/2014/06/17/collinearity/

//Your task is to write a function that takes three points in the x,y plane and
//determines if they are collinear; be sure to handle vertical lines and
//horizontal lines properly.

function collinear(x1, y1, x2, y2, x3, y3) {
	if (x1 == x2 && x2 == x3)
		return true
	if (y1 == y2 && y2 == y3)
		return true
	var dx12 = (x1-x2),
		dy12 = (y1-y2),
		dx23 = (x2-x3),
		dy23 = (y2-y3);
	var xdiv = dx12/dx23,
		ydiv = dy12/dy23;
	return xdiv==ydiv
}

[
	[
		0, 1, //true
		1, 3,
		3, 7
	], [
		0, 1, //false
		1, 3,
		4, 7
	], [
		0, 1, //true
		0, 3,
		0, 5
	], [
		1, 4, //true
		3, 4,
		4, 4
	], [
		1, -1, //true (i think)
		3, -2,
		-5, 2
	], [
		0, 0, //false
		3, -2,
		-5, 2
	]
].forEach(function(ele) {
	console.log( collinear.apply(null, ele) )
})
