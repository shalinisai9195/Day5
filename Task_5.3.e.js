//using arrow function find given number or string is Palindrom or Not

let arr = ["Madam"];

let Palindrome = (arr) => {
let result = arr[0].split("").reverse().join("");

if(arr == result){

    console.log("It is a Palindrome");
}else
{
    console.log("It is not a Palindrome");
}
};

Palindrome(arr);