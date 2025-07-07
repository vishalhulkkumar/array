//m<n
//in isvalid function mid=maxallowedpage
function isvalid(arr,n,m,maxallowedpage){
    let student=1
    let pages=0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>maxallowedpage){
            return false
        }
        if(pages+arr[i]<=maxallowedpage){
            pages+=arr[i]
        }
        else{
            student++
            pages=arr[i]
        }
    }
    return student >m?false:true
}
function BookAllocation(arr,m,n){
    if(n<m){
        return -1
    }
    //sum of arr
    let sum=0
    for (let i = 0; i <n; i++) {
        sum+=arr[i]
    }
    let ans=-1
    let st=0,end=sum
    while(st<=end){
        let mid=st+(end-st)/2
        if(isvalid(arr,n,m,mid)){
            //left move
            ans=mid
            end=mid-1
        }
        else{
            //right move
            st=mid+1
        }
    }
    return ans
}
let arr=[2,1,3,4]
let n=arr.length-1
let m=2
console.log(BookAllocation(arr,m,n));
