function possible(arr,mid,m){
    let painter=1
    let boardpaint=0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>mid){
            return false
        }
        if(boardpaint + arr[i]>mid){
            painter++
            boardpaint=arr[i]
        }
        else{
            
            boardpaint+=arr[i]
        }
        if(painter>m){
            return false
        }
    }
    
    return true
}
function painterpartition(arr ,m){
    let max=0
    let sum=0
    for (let i = 0; i < arr.length; i++) {
        max=Math.max(max,arr[i])
        sum+=arr[i]
    }
    
    //we have to apply binary search for in range max to sum  because 
    //if we have 1 painter then time require is sum and if n painter then max value is the time require
    let ans=-1
    while(max<=sum){
        let mid=Math.floor(max+(sum-max)/2)
        
        if(possible(arr,mid,m)){
            //move left side of range
            ans=mid
            sum=mid-1
        }
        else{
            //move right side of range
            max=mid+1
        }
    }
    return ans

}
let arr=[40,30,10,20]
let m=2
console.log(painterpartition(arr,m));
