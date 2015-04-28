// Identifying Anagrams

// Write a program that takes two strings as input and determines whether or
// not they are anagrams; you may assume that the strings consist of only the
// letters A through Z in upper case. You must provide at least two different
// algorithms that work in fundamentally different ways.

function method1(str1, str2) {
	return str1.toUpperCase().split('').reduce(function (memo, char) {
		return !!memo && memo.replace(char, '')
	}, str2.toUpperCase()) === ''
}

function method2(str1, str2) {
	str1 = str1.toUpperCase().split('').sort().join('')
	str2 = str2.toUpperCase().split('').sort().join('')
	return str1 === str2
}

function testSuite(isAnagram, msg) {
	console.log('# ' + msg)

	console.log( isAnagram('DEPOSIT', 'DOPIEST') )
	console.log( isAnagram('OPTS', 'POTS') )
	console.log( isAnagram('OPTS', 'TOPS') )
	console.log( isAnagram('TOPS', 'STOP') )

	console.log( !isAnagram('AAA', 'AAB') )
	console.log( !isAnagram('AAB', 'AAA') )
	console.log( !isAnagram('ABB', 'AAB') )
	console.log( !isAnagram('AAB', 'ABB') )

	console.log( isAnagram('RIDICULOUS', 'iculousrid') )
	console.log( isAnagram('RIDICULOUS', 'iculousrid') )

	console.log( !isAnagram('RIDICULOUS', 'WHATEVER') )
	console.log( !isAnagram('REALLY', 'UM') )

	console.log( !isAnagram('abcdef', 'abc') )
	console.log( !isAnagram('abc', 'abcdef') )
}

testSuite(method1, 'replace method')
testSuite(method2, 'sort method')
