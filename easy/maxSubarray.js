//in this array,array element can be negative
let arr=[3,-4,5,4,-1,-7,8] 
let maxi=-Infinity
let sum=0
for (let i = 0; i < arr.length; i++) {
    sum+=arr[i]
    maxi=Math.max(maxi,sum)
    if(sum<0){
        sum=0
    }
}
console.log(maxi);
