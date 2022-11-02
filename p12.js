//use the function to convert a word to lower
function toLower(char)
{
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower="abcdefghijklmnopqrstuvwxyz";
  for(i=0;i<upper.length;i++)
  {
    if(char==upper[i])
    {
      return lower[i];
    }
  }
    return char;
}

function convertWordLower(word)
{ let bag="";

  for(i=0;i<word.length;i++)
  {
    
   bag+=toLower(word[i]);
   
  }
 return bag;
}
console.log(convertWordLower("AKQ"));
