// sum of all array using Arrow function

let sumnumber = [2,4,3];

let result = (sumnumber) =>{

    let result = 0;
    for (let i= 0; i < sumnumber.length; i++) {
    
      result += sumnumber[i];
       }
    console.log(result)

}

result(sumnumber);