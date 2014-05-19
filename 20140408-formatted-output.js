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

//module.exports = function printf() {
function printf() {
	var result = ""
	var args = Array.prototype.slice.call(arguments)
	if (args.length>0) {
		if (args.length===1) {
			result = args[0]
		} else {
			var string = args[0]
			args = args.slice(1)
			
			var prevWasSpecial = false
			var wasSpecial = false
			var filtered = string.split("").filter(function (val) {
				prevPrevSpecial = wasSpecial
				var keep = true
				if (wasSpecial) {
					if (wasSpecial==="\\")					wasSpecial = false
					else if (wasSpecial==="%") {
						if (/(c|d|f|o|s|x|%)/.test(val))	wasSpecial = false
						else if (/(-|[0-9]|\.)/.test(val))	wasSpecial = true
					}
				} else {
					keep = /(%|\\)/.test(val)
					if (keep)   wasSpecial = val
					else        wasSpecial = ""
				}
				return keep
			}).join("")
			
			console.log("filtered:", filtered)
			console.log("string: ", string)
			console.log("args: ", args)
		}
	}
	console.log(result)
}

printf("%d", 14)
printf("%s", "hello")
printf("%2.1f", 120.047)
printf("%d - %s", 95, "hello")
printf("wuzzup")
