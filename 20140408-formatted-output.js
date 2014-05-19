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
