//write a function for isOdd in a boolean
//odd--true
//even--false
function isOdd(a){
  if(a%2==1){
    return true;
  }
  else{
    return false;
  }
}
//use function to calculate odd num from given limit
for(i=0;i<100;i++){
  if(isOdd(i)){
    console.log(i,"is odd")
  }
}