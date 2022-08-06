// Print odd numbers using arrow function
 
let oddnumber = [1,2,3,4,5,6,7,8]
let ans =(oddnumber) => {
    

    for(let i=0; i< oddnumber.length;i++)
    {
        if(oddnumber[i] % 2 != 0)
        {
            console.log(oddnumber[i])
        }
    }
 }
 ans(oddnumber);