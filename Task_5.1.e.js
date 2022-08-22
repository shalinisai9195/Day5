// using anonymous function find given number or string is Palindrom or Not.
let arr = ["1212"];

let Palindrome = function (arr){
let result = arr[0].split("").reverse().join("");

if(arr == result){

    console.log("It is a Palindrome");
}else
{
    console.log("It is not a Palindrome");
}
};

Palindrome(arr);