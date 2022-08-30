// Return median of 2 sort arrays of the same size. Using anonymous 

let arr1 = [1,12,15,26,38];
let arr2 = [2,13,17,30,45];
let Concat_arr = arr1.concat(arr2);

Concat_arr = Concat_arr.sort(function(a,b){return a-b});

let Len = Concat_arr.length;

console.log(Concat_arr);

let median_find = function(Concat_arr){

    if(Len%2 == 1)
    {
      //len is odd
      console.log(Concat_arr[(Len/2) - .5]);
     
    }else
    {
      //len is even
       console.log((Concat_arr[(Len/2)] + Concat_arr[(Len/2)-1])/2);
     // return (Concat_arr[(Len/2)] + Concat_arr[(Len/2)-1])/2;
    }
}

median_find(Concat_arr);



