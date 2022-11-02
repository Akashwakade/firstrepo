// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]
let char="Z";
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
//console.log(tolower("A"));

function convertwordlower(word)
{ let bag="";
  for(let i=0;i<word.length;i++)
  {  p = word[i];
    bag+=toLower(p);
  }
return bag;
  
}
 //convertwordlower("MASAI SCHOOL");

//array of strings to array of lower case of string

function convertarrStrlower(arr){ 
let bagarr=[];
for(let i=0;i<arr.length;i++){
  p=arr[i];
  ans=convertwordlower(p)
  bagarr.push(ans);
  // console.log(ans)
}
  return bagarr;
}
arr= ["MA", "SA", "I", "SCH", "OOL","AKASH","WAKADE"];
console.log(convertarrStrlower(arr));
