//Joseph Dykstra
//2014-06-10

//Balanced Delimiters
//http://programmingpraxis.com/2014/06/10/balanced-delimiters-2

//Write a function to return true/false after looking at a string. Examples of strings that pass:
//{}, [], (), a(b)c, abc[d], a(b)c{d[e]}
//Examples of strings that don’t pass:
//{], (], a(b]c, abc[d}, a(b)c{d[e}]

function balanced(str) {
	var stack = []
	return str.split('').every(function(ele) {
		var result = true
		console.log(ele, ele.charCodeAt(0))
		if (ele === '[' ||
			ele === '{' ||
			ele === '(')
				stack.push(ele)
		if ((ele === ']' && stack.pop() !== '[') ||
			(ele === '}' && stack.pop() !== '{') ||
			(ele === ')' && stack.pop() !== '('))
				result = false
		return result
	})
}

[
	'{}, [], (), a(b)c, abc[d], a(b)c{d[e]}',
	'{], (], a(b]c, abc[d}, a(b)c{d[e}]',
	'{([[[()]]])}',
	'{([[[(])]])}'
].forEach(function(ele){
	console.log('balanced: ', balanced(ele))
})
