// let's start by defining what is prime. 
	// First, prime is greater than 1. 
	// Second, prime are divisible itself (e.g. 2 % 2 = 0 because 2*1 is 2 and there's no other natural factor left) 
	// so the hardest part of be the divisible and it would look something like num % num1 = 0 (this is condition for divisible of itself)

function isPrime(num) {
	var primeArray = [];
	for (var counter = 2 ; counter <= num ; counter++)
	{
	    var primeFlag = 0; // reset primeFlag before we run the divisible test again
	    for (var i = 2 ; i <= counter ; i++ )
	    {
	        if (counter % i === 0 ){ // test if counter are divisible of itself
	            primeFlag += 1; // primeTest = primeTest + 1; if prime then, primeTest is 1 if not then it stay 0 as indicated
	        }
	    }
	    if ( primeFlag === 1 ){ // print when primeFlag is 1
	        primeArray.push(counter); //could console.log to print it here or push it into array and return that array
		}
	}    
	return primeArray;
}

console.log(isPrime(100));


//use .split to split string into array of substring. "" indiciates split at every character
//use .reverse to reverse the array of string
//use .join('') to join the reversed array into a full string. "" indiciates join at every character
// test if original string is equal to reverse string

function isPalindrome(string) {
    if (string == string.split('').reverse().join('')) { 
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindrome("racecar"));

function reverseString(string) {
    var reversed = string.split('').reverse().join('');
    return reversed;
}
console.log(reverseString("cry"));