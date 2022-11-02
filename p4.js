//check no. is prime or not using function
function check_prime(a){
  let count=0;
  for(i=1;i<=a;i++){
    if(a%i==0){
      count++;
    }
   
  }
  if(count==2){
    console.log(a,"no.is prime")
  }
  else{
    console.log(a,"is not a prime")
  }
  
}
check_prime(9);