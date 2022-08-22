// Using anonymous function to find Prime number
let result = function (num){

    let count = 0;
    for(let i=1;i<=num;i++){
    
       for(let j=1;j<=num;j++)
       {
         if(i * j == num)
         {
            count += 1;
         }
       
       }
   }
   
   if(count <= 2)
   {
     console.log("Prime ");
   }
   else {
     console.log("Not Prime");
   } 
  
  };

let userInput = [19];

result(userInput);

    
