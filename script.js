// complete the given function
let isPalindrome = true;

function palindrome(str){
	let i=0, j=str.length-1;
	
	while(i<=j){
		if(str[i] !== str[j]){
			isPalindrome = false
			break;
		}
		i++;
		j--;
	}
}

if(isPalindrome == true){
	console.log("true")
}
else{
	console.log("false")
}
module.exports = palindrome
