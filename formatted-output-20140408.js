//Joseph Dykstra
//2014-04-11

//Formatted Output
//http://programmingpraxis.com/2014/04/08/formatted-output/

// There are three functions in the printf family: (sprintf fmt expr …) returns
// a string formatted according to the specification given by format and
// containing the values expr …; (printf fmt expr …) displays a string formatted
// similarly to sprintf to the current output port, and
// (fprintf port fmt expr …) displays a string formatted similarly to sprintf to
// the indicated port. The fmt and port arguments are always required.
// 
// The fmt argument is a string that contains literal text, escape sequences,
// and specifications of how the expressions should be formatted. A
// specification consists of a literal percent-sign %, zero or more modifiers,
// and a single-character specifier. The single-character specifiers that we
// will support are:
// 
// 	c ascii character
// 	d decimal integer
// 	f floating-point number
// 	o octal integer
// 	s string
// 	x hexadecimal integer
// 	% literal percent sign
// 
// There should be as many expressions as there are format specifiers in the fmt
// string, except that a % literal percent sign specifier does not consume an
// expression. As many as four modifiers may appear between the literal percent
// sign % that starts a specifier and the single-character specifier that ends
// it:
//
//	- left-justify the expression in its field; if not given, the expression is right-justified
//	0 left-pad with leading zeros instead of spaces
//	width pad field to this width using spaces (or zeros)
//	.prec digits to right of decimal point, or maximum string length
//
// The modifiers must appear in the order shown above. The width and prec
// arguments are unsigned decimal integers.
//
// Escape sequences are introduced by a backslash; the following escape
// sequences are supported:
//
//	\b backspace
//	\f formfeed
//	\n newline
//	\r carriage return
//	\t horizontal tab
//	\ddd character with octal value ddd, where ddd is 1 to 3 digits between 0 and 7 inclusive
//	\c any other character c literally, for instance \\ for backslash or \" for quotation mark

function pad(str, opts) {
	if ( (opts.precision||0) > 0)
		str = parseFloat(str).toPrecision(opts.precision).toString()
	if ( (opts.width||0) > 0) {
		var tStr = ''
		for(var i=0; i < opts.width-str.length; i++)
			tStr += (opts.zeroPad)? '0' : ' '
		if (opts.zeroPad || opts.leftPad)	str = tStr + str
		else								str = str + tStr
	}
	return str
}

function filterOut(ele) {
	return (typeof ele !== 'undefined' && ele !== '')
}

function printf() {
	var result = ''
	var args = Array.prototype.slice.call(arguments)
	var re = /([^%\\]*)(%-?0?(?:[0-9]|\.)*[cdfosx%]|\\(?:[0-7]{1,3}|.))([^%\\]*)?/g //Find '%'s and '\'s
	var reModifiers = /(-?)(0?)([0-9]?)(?:\.([0-9])?)/ //Get modifiers from between '%' and end char

	if (args.length<1)
		throw Error("No arguments for printf()")

	var string = args.shift()
	var stringArr = []
	for(var temp = []; temp; temp = re.exec(string))
		stringArr = stringArr.concat(temp.slice(1)).filter(filterOut)
	if (stringArr.length === 0)
		stringArr = [string]

	var argIndex = 0
	result = stringArr.map( function(ele) {
		var prefix = ele.slice(0,1)
		var modifiers = ele.slice(1, -1)
		var suffix = ele.slice(-1)
		var result = ''
		if (prefix === '%') {
			if (suffix === '%'){
				result = '%'
			} else {
				if (argIndex>args.length)
					throw Error("# of arguments < # of '%'s in printf()")

				switch(suffix) {
					case 'c': result = String.fromCharCode(parseInt(args[argIndex], 10)); break// c ascii character
					case 'd': result = parseInt(args[argIndex], 10).toString(); break // d decimal integer
					case 'f': result = parseFloat(args[argIndex]).toString(); break // f floating-point number
					case 'o': result = parseInt(args[argIndex], 8).toString(); break // o octal integer
					case 's': result = args[argIndex].toString(); break // s string
					case 'x': result = parseInt(args[argIndex], 16).toString(); break // x hexadecimal integer
				}
				
				if (modifiers) {
					var temp = (reModifiers.exec(modifiers)||[]).slice(1)
					result = pad(result, {
						leftPad:   (temp[0])? true : false,
						zeroPad:   (temp[1])? true : false,
						width:     parseInt(temp[2]),
						precision: parseInt(temp[3])
					})
				}
				argIndex++
			}
		} else if (prefix === '\\') {
			if (modifiers) { //Octal
				result = String.toCharCode(parseInt(modifiers+suffix))
			} else {
				switch(suffix) {
					case 'b': result = '\b'; break //backspace
					case 'f': result = '\f'; break //formfeed
					case 'n': result = '\n'; break //newline
					case 'r': result = '\r'; break //carriage return
					case 't': result = '\t'; break //tab
					default:  result = suffix; break
				}
			}
		} else {
			result = ele
		}
		return result
	}).join('')
	console.log("'"+result+"'")
}

console.log(pad('3.1415926535', {
	width: 1,
	precision: 4,
	leftPad: false,
	zeroPad: false
}))

console.log(pad('123.1415926535', {
	width: 1,
	precision: 4,
	leftPad: false,
	zeroPad: false
}))

console.log(pad('3.1415926535', {
	width: 4,
	precision: 4,
	leftPad: true,
	zeroPad: true
}))

console.log(pad('3.1415926535', {
	width: 8,
	precision: 4,
	leftPad: false,
	zeroPad: true
}))

console.log(pad('3.1415926535', {
	width: 8,
	precision: 4,
	leftPad: true,
	zeroPad: false
}))

console.log('===============')

printf("%d", 14)
printf("j %s j", "hello")
printf("%2.1f", 120.047)
printf("%2.f", 120.047)
printf("%d - %s", 95, "hello")
printf("%2.1f %1.5f", 120.047, 3.1415926)
printf("wuzzup")
