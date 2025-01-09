//take value dynamically

function Palindrome(str) {         
    let j = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

// Taking input dynamically using prompt
let inputStr = prompt("Enter a string to check if it's a palindrome:");
console.log(Palindrome(inputStr));


