function minOper(arr){
    let i=0
    let j=arr.length-1
    let ans=0
    while(i<j){
        if(arr[i]===arr[j]){
            i++
            j--
        }
        else if(arr[i]<arr[j]){
            i++
            arr[i]+=arr[i-1]
            ans++
        }
        else{
            j--
            arr[j]+=arr[j+1]
            ans++
        }
    }
    return ans
}
let arr=[1,2,4,3,8]
console.log(minOper(arr));
