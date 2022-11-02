// //Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block



function toLower(char)
{ 
let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(let i=0; i<upper.length;i++)
  {
    if(char==upper[i])
    {
     return(lower[i]);
    }
  } return char;
}

function convertwordlower(word)
{ let bag="";
  for(let i=0;i<word.length;i++)
  {  p = word[i];
    bag+=toLower(p);
  }
return bag;
  
}

function toUpper(char)
{ 
let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(let i=0; i<lower.length;i++)
  {
    if(char==lower[i])
    {
     return(upper[i]);
    }
  } return char;
}
function convertwordupper(word)
{ let bag="";
  for(let i=0;i<word.length;i++)
  {  p = word[i];
    bag+=toUpper(p);
  }
return bag;
  
}
// let str="test";
// console.log(convertwordupper(str));
str="Test";
  let bag="";
let lower="abcdefghijklmnopqrstuvwxyz";
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(i=0;i<str.length;i++){
  for(j=0;j<upper.length;j++)
    {
      if(str[i]==upper[j]){
       bag+=(toLower(str[i]));
      }
      if(str[i]==lower[j]){
        bag+=toUpper(str[i]);
      }
   // , toUpper(str[i]));
  
}
  
}console.log(bag)
//     console.log(convertwordupper(str))
// console.log(convertwordlower(str))

 
  //   p=convertwordupper(str[i]);
  // q=convertwordlower(str[i]);
  
  //   console.log(q,p)
  
  

