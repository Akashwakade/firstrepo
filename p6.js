//Problem 2: Use the above function to print the Primes from 2 to a given limit

function check_prime(a){
  let count=0;

  for(let i=1;i<=a;i++){
    if(a%i==0){
      count++;
    }
   
  }
  if(count==2){
    return true;
  }
  else{
    return false;
  }}


   for(let i=1;i<=10;i++){ 
  if(check_prime(i)){
     console.log(i,'is prime')
  }
     else{
       console.log(i,"is not a prime")
     }
  }



