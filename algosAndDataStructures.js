// // REVERSE STRING //////////////////////////////////////////////////////////////////

// // solution 1
// function reverse(str) {
// 	return str.split("").reverse().join("");
// }
// console.log(reverse('apple'));
// console.log(reverse('hello'));
// console.log(reverse('Greetings!'));

// // solution 2
// function reverse2(str) {
// 	let reversed = '';

// 	for (let character of str) {
// 		reversed = character + reversed;
// 	}

// 	return reversed;
// }
// console.log(reverse('apple'));
// console.log(reverse('hello'));
// console.log(reverse('Greetings!'));

// // solution 3
// // reversed is the new string
// // char is iterable element of str(array)
// // '' is the initial value of reversed
// function reverse3(str) {
// 	return str.split('').reduce((reversed, char) => char + reversed, '');
// }
// console.log(reverse('apple'));
// console.log(reverse('hello'));
// console.log(reverse('Greetings!'));

// // PALINDROME //////////////////////////////////////////////////////////////////

// // solution 1
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }
// console.log(palindrome("abcdefg"));
// console.log(palindrome("abba"));

// // solution 2
// function palindrome(str) {
// 	for (var i=0; i<str.length/2; i++) {
// 		if (str[i] !== str[str.length-i-1]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
// console.log(palindrome("abcdefg"));
// console.log(palindrome("abba"));

// // solution 3
// // .every() checks every element char in str(array)
// // i is incremented variable
// // if any comparison is false it returns false
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }
// console.log(palindrome("abcdefg"));
// console.log(palindrome("abba"));

// // INTEGER REVERSAL //////////////////////////////////////////////////////////////////

// // solution 1
// // math.sign() gives the polarity of number
// function reverseInt(n) {
//   const reversed = n.toString().split('').reverse().join('');
//   return parseInt(reversed) * Math.sign(n);
// }
// console.log(reverseInt(15));
// console.log(reverseInt(981));
// console.log(reverseInt(500));
// console.log(reverseInt(-15));
// console.log(reverseInt(-90));

// // MAX CHAR //////////////////////////////////////////////////////////////////

// function maxChar(str) {
// 	const dict = {};
// 	let max = 0;
// 	let maxChar = "";
// 	for (let char of str) {
// 		if (dict[char]) {
// 			dict[char]++
// 		} else {
// 			dict[char] = 1;
// 		}
// 	}
// 	for (let key in dict) {
// 		if (dict[key] > max) {
// 			max = dict[key];
// 			maxChar = key;
// 		}
// 	}
// 	return maxChar;
// }
// console.log(maxChar("abcccccccd"));
// console.log(maxChar("apple 1231111"));

// // FIZZ BUZZ!  //////////////////////////////////////////////////////////////////

// function fizzBuzz(n) {
// 	for (let i=1; i<=n; i++) {
// 		if (i % 15 === 0) {
// 			console.log("fizzbuzz");
// 		} else if (i % 3 === 0) {
// 			console.log("fizz");
// 		} else if (i % 5 === 0) {
// 			console.log("buzz");
// 		} else {
// 			console.log(i)
// 		}
// 	}
// }
// fizzBuzz(5);

// // ARRAY CHUNKING  //////////////////////////////////////////////////////////////////

// // solution 1
// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array) {
// 		// create variable and set to the last element of the chunked array
//     const last = chunked[chunked.length - 1];
// 		// if last chunk is null or full, then push new chunk into chunked with the element
//     if (!last || last.length === size) {
// 			chunked.push([element]);
// 			// add element into the last chunk
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }
// console.log(chunk([1, 2, 3, 4], 2));
// console.log(chunk([1, 2, 3, 4, 5], 2));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) );
// console.log(chunk([1, 2, 3, 4, 5], 4) );
// console.log(chunk([1, 2, 3, 4, 5], 10));

// // solution 2
// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;
//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }
//   return chunked;
// }
// console.log(chunk([1, 2, 3, 4], 2));
// console.log(chunk([1, 2, 3, 4, 5], 2));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) );
// console.log(chunk([1, 2, 3, 4, 5], 4) );
// console.log(chunk([1, 2, 3, 4, 5], 10));

// // ANAGRAMS  //////////////////////////////////////////////////////////////////

// // solution 1
// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
// 	return str
// 		// non-alphanumeric characters with ''
// 		.replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
// }
// console.log(anagrams('rail safety', 'fairy tales'));
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
// console.log(anagrams('Hi there', 'Bye there'));

// // solution 2
// function anagrams(stringA, stringB) {
//   const dictA = buildDict(stringA);
//   const dictB = buildDict(stringB);
//   if (Object.keys(dictA).length !== Object.keys(dictB).length) {
//     return false;
//   }
//   for (let char in dictA) {
//     if (dictA[char] !== dictB[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildDict(str) {
//   const dict = {};
// 	// replace non-alphanumeric characters with ''
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
// 		// if dict[char] exists add 1, if not set it to 1
//     dict[char] = dict[char] + 1 || 1;
//   }
//   return dict;
// }
// console.log(anagrams('rail safety', 'fairy tales'));
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
// console.log(anagrams('Hi there', 'Bye there'));

// // CAPITALIZATION  //////////////////////////////////////////////////////////////////

// // solution 1
// function capitalize(str) {
// 	const words = [];
// 	str = str.split(' ');
// 	for (let word of str) {
// 		let capital = word[0].toUpperCase() + word.slice(1)
// 		words.push(capital);
// 	}
// 	return words.join(" ");
// }
// console.log(capitalize('a short sentence'));
// console.log(capitalize('a lazy fox'));
// console.log(capitalize('look, it is working!'));

// // solution 2
// function capitalize(str) {
//   let result = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(capitalize('a short sentence'));
// console.log(capitalize('a lazy fox'));
// console.log(capitalize('look, it is working!'));

// // PRINTING STEPS  //////////////////////////////////////////////////////////////////

// // solution 1
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }
// steps(2);
// steps(3);
// steps(4);

// // solution 2
// function steps(n, row = 0, stair = '') {
//   if (n === row) {
//     return;
//   }
//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
// 	}
// 	if (stair.length <= row) {
// 		stair += "#"
// 	} else {
// 		stair += " ";
// 	}
// 	steps(n, row, stair);
// }
// steps(2);
// steps(3);
// steps(4);