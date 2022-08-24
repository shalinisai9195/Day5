// Rotate array in k time used IIFI

let arr =[1,2,3,4,5,6];
let k = 3;

(
 (arr,k) =>{
    for(let i=0;i < k;i++){
        let back = arr.pop();
       arr.unshift(back);
       }
       console.log(arr);
    }
)(arr,k); 
