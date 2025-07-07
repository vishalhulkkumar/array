function possible(arr,mid,cow){
    let cowallocate=1
    let largestmindistance=arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]-largestmindistance>=mid){
            cowallocate++
            largestmindistance=arr[i]
        }
        if(cowallocate>=cow){
            return true
        }
    }
    return false
}
function largestOfMin(arr,cow){
    
    arr.sort((a, b) => a - b)
    let st=1
    let end=arr[arr.length-1]-arr[0]
    let ans=0
    while(st<=end){
        let mid=Math.floor(st+(end-st)/2)
        if(possible(arr,mid,cow)){
            ans=mid
            st=mid+1
        }
        else{
            end=mid-1
        }
    }
    return ans
    
}
let cow=3
let arr=[1,2,8,4,9]
console.log(largestOfMin(arr,cow));
