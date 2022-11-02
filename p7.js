//Problem 4: Write a function to check if the char is a small case or not.

function checkchar(char){
str="qwertyuiopasdfghjklzxcvbnm";
  let isthere=false;
for(i=0;i<str.length;i++){
  if(char==str[i]){
  isthere=true;
    break;
  }
  }
  return isthere;
  
}
let ans=checkchar("M");
  if(ans==true){
    console.log("small case");
  }
else{
  console.log("Not a small case");
}