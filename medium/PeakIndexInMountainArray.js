//Peak index is not 0,n-1
function PeakIndex(arr,st,end){
    
    while(st<=end){
        let mid=Math.floor(st+(end-st)/2)
        if(arr[mid-1]<arr[mid] && arr[mid]>arr[mid+1]){
            return mid
        }
        if(arr[mid]<arr[mid+1]){
            st=mid+1
        }
        else{
            end=mid-1
        }
    }
    return -1
}
let arr=[0,3,8,9,5,2]
let st=1
let end=(arr.length)-2
console.log(PeakIndex(arr,st,end));

