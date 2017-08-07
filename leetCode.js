// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321

function reverseInt(num){
	// reverse loop to count
	// join for array
	// use reverse array method
	// join back
	// loop for count to num
	var array = []; // holding array
	for (var i = 0; i <= num; i++){
		array.push(i);
	}
	return array.reverse().join('');
}

console.log(reverseInt(10));


// Consider that i have two series 2,3,4,5,6 and 4,5,6,7,8,9. 
// There are a few numbers in common in these series. 
// What algorithm should I use to write a computer program to find if two given series intersect.

// [4, 5, 6]

function intersection(arr1, arr2){
	var array = []; // holding array for the matched
	for (var i = 0; i < arr1.length; i++){ // count first array
		for (var j = 0; j < arr2.length; j++){ // count second array
			if (arr1[i] === arr2[j]){  // if index matches then push into holding array
				array.push(arr1[i]);
			}
		}
	}
	return array;
}

console.log(intersection([1, 2, 3, 4, 5, 6], [4, 5, 12, 6, 7, 9]));