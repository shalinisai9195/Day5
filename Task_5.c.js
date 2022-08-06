// c. sum of all number in array using IIFE

let sumnumber = [2,4,3,1]

let finalans = function (sumnumber) {

    let result = 0;
    for (let i= 0; i < sumnumber.length; i++) {
    
      result += sumnumber[i];
       }
    console.log(result)
}
finalans(sumnumber);