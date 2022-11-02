// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

function sumArr(arr){
let sum=0;
for(i=0;i<arr.length;i++){
  sum+=arr[i];
}
return sum;
}

//
//to find average
function avr(arr){ 
 if(arr.length==0){
   average=0;
     return average;
 }

    average=sumArr(arr)/arr.length;
    return average;

}
//let arr=[];
let arr=[1,2,3,4,5];
console.log(avr(arr));
