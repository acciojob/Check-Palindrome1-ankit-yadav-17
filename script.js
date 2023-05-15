// complete the given function

function palindrome(str){
	let i=0, j=str.length-1;
	let isPalindrome = true;
	while(i<=j){
		if(str[i] !== str[j]){
			isPalindrome = false
			break;
		}
		i++;
		j--;
	}
}
module.exports = palindrome
