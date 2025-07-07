//used in sorted array
function BS(arr,target,st,end){
    if(st<=end){
        mid=Math.floor(st+(end-st)/2)
        if(target<arr[mid]){
            return BS(arr,target,st,mid-1)
        }
        else if(target>arr[mid]){
            return BS(arr,target,mid+1,end)
        }
        else if(target===arr[mid]){
            return console.log(mid,arr[mid])
        }
        return -1
    }
    
    
}
let arr=[3,7,45,56,78,89]
let target=78
let st=0
let end=arr.length
let mid
BS(arr,target,st,end)
