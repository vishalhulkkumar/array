let arr=[4,52,6,2,3,5,6,4,2,13,42,34,43]
function maxmin(arr){
let max=-Infinity
let min=Infinity
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>max){
        max=arr[i]
    } 
    if(arr[i]<min){
        min=arr[i]
    } 
   
}
console.log("minimum is"+min);
console.log("maximum is"+max);
}
maxmin(arr)


// console.log(max);
