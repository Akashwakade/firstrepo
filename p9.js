//write a code function for absolute difference of two numbers.
function absdifference(a,b){
  difference=a-b;
  if(difference<0){
    difference=difference*-1;
    
  }
  return difference
}
ans=absdifference(4,22)
console.log(ans)
