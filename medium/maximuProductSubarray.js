function max(a,b,c) {return (a>b?(a>c?a:c):(b>c)?b:c)}//finding max
function min(a,b,c) {return (a<b?(a<c?a:c):(b<c)?b:c)}//finding min

function maxprodSubarray(arr){
    let currmin=arr[0]
    let currmax=arr[0]
    let maxprod=arr[0]
    for (let i = 1; i < arr.length; i++) {
        let temp=max(arr[i]*currmax,arr[i]*currmin,arr[i])
        currmin=min(arr[i]*currmax,arr[i]*currmin,arr[i])
        currmax=temp
        maxprod=Math.max(currmax,maxprod)
    }
    return maxprod
}
let arr=[-2,6,-3,-10,0,9]
console.log(maxprodSubarray(arr))