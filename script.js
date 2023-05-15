// complete the given function
let isPalindrome = true;
let Str = str.toLowerCase();
function palindrome(Str){
	let i=0, j=Str.length-1;
	
	while(i<=j){
		if(Str[i] !== Str[j]){
			isPalindrome = false
			return false;
			break;
		}
		i++;
		j--;
	}
	return true;
}

if(isPalindrome == true){
	console.log("true")
}
else{
	console.log("false")
}
module.exports = palindrome
