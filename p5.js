//with return
function evenOdd(a){
  if(a%2==1){
    return "odd";
  }
  else{
    return "even";
  }
}
answer=evenOdd(6)
console.log(answer)

function evenodd(a,b){
  return a+b;
}
answer=evenodd(5,5);
if(answer%2==0){
  console.log("even");
}
else{
  console.log("odd");
}