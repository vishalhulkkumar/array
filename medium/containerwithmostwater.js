function Trapwater(arr){
    let l=0
    let r=arr.length-1
    let CTrap=0
    let maxTRap=0
    while(l<r){
        if(arr[l]>=arr[r]){
            CTrap=(r-l)*arr[r]
            maxTRap=Math.max(CTrap,maxTRap)
            r--
        }
        if(arr[l]<=arr[r]){
            CTrap=(r-l)*arr[l]
            maxTRap=Math.max(CTrap,maxTRap)
            l++
        }
    }
    return maxTRap
}
let arr=[1,8,6,2,5,4,8,3,7]
console.log(Trapwater(arr));
