const palindrome = (palin) => {
    // Helper function to clean a character (remove non-alphanumeric and lowercase)
    const cleanChar = (char) => {
        const cleaned = char.toLowerCase();
        if (cleaned >= 'a' && cleaned <= 'z') {
            return cleaned;
        }
        if(cleaned >= '0' && cleaned <= '9'){
            return cleaned;
        }
        return '';
    };

    // Clean da string and remove non-alphanumeric characters
    const cleanStr = palin.split('').map(cleanChar).join('');

    // Base case: empty or single character string is a palindrome
    if (cleanStr.length <= 1) {
        return true;
    }

    // Check if the first and last cleaned characters are the same
    if (cleanStr[0] !== cleanStr[cleanStr.length - 1]) {
        return false;
    }

    // Recursive call with the substring excluding the first and last characters
    return palindrome(cleanStr.slice(1, -1));
};

console.log(palindrome('refer')); 
console.log(palindrome('racecar')); 
console.log(palindrome('A man, a plan, a canal: Panama')); 
console.log(palindrome('hello')); 
console.log(palindrome('Was it a car or a cat I saw?')); 
console.log(palindrome('12321')); 
console.log(palindrome('12345')); 