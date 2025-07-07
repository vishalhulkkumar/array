let arr=[46,5,4,5,2,38,53]
let n=arr.length
for (let i = 0; i < n/2; i++) {
    let temp=arr[i]
    arr[i]=arr[n-i-1]
    arr[n-i-1]=temp

    //or

    // [arr[i],arr[n-i-1]]=[arr[n-i-1],arr[i]]
}
console.log(arr);
