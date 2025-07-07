//using sorting
function Klargestele(arr ,k){
    let n=arr.length
    arr.sort((a,b)=>a-b)//used for sort number 
    return arr[n-k]
}

//using optimal aproach ----optimal for that array where element range is small
function OKlargestele(arr,k){
    //find Max element
    let max =arr[0]
    for (let i = 1; i < arr.length; i++) {
        max=Math.max(max,arr[i])   
    }
    //create new array of size max
    let arr1=new Array(max).fill(0)
    
    for (let i = 0; i < arr.length; i++) {
        arr1[arr[i]]++
        // arr1[arr[i]]+=1
    }
    let count=0
    for (let i = max-1; i >=0; i++) {
        if(arr1[i]!==0){
            count+=arr1[i]
            if(count>=k){
                return i
            }
        }
    }
    return -1
}

let arr=[1,12,2,23,3,34]
let k=3
console.log(OKlargestele(arr,k));
