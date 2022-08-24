// Removing duplicate in Array using anonymous function
let array =[1,2,2,3,4,5,5];

let duplicatearry = function(array){

// let uniqset = new Set(array);
// let backtoarry = [...uniqset];
// console.log(backtoarry);
  console.log( Array.from(new Set(array)));
}

duplicatearry(array);