//Problem 5: Write a function to replace spaces in a given string with - .
function replaceSpace(str){

let bag="";
for(i=0;i<str.length;i++){
  if(str[i]==" "){
    bag+="-";
  }
  else{
    bag+=str[i];
  }
 
} console.log(bag);
}
replaceSpace("my name is Akash Bharat Wakade")