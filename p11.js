//write a function to convert a word to lower case
function toLower(char){
  let upper='ABCEDFGHIJKLMNOPQRSTUVWXYZ'
  let lower='abcedfghijklmnopqrstuvwxyz';
  
  
    for(i=0;i<char.length;i++){
    if(char[i]==upper[i]){
      return lower[i];
    }
  }
}
let word="akash wakade";
ans=toLower(word);
console.log(ans)
