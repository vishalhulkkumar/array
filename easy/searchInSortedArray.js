function RotatedSortedArray(arr,target,st,end){
    while(st<=end){
        mid=Math.floor(st+(end-st)/2)
        if(target===arr[mid]){
            return mid
        }
        if(arr[st]<=arr[mid]){
            if(arr[st]<=target && target<=arr[mid]){
                end=mid-1
            }
            else{
                st=mid+1
            }
        }
        else{
            if(arr[mid]<=target && target<=arr[end]){
                st=mid+1
            }
            else{
                end=mid-1
            }
        }
    }
    return -1

}
let arr=[4,5,6,7,8,9,0,1,2,3]
let target=99
let mid
let st=0
let end=arr.length-1
console.log(RotatedSortedArray(arr,target,st,end));

