//buy stock at minimum and selled it in future to max profit
function buySellStock(arr){
    let max=-Infinity
    let min=Infinity
    for (let i = 0; i < arr.length; i++) {
        max=Math.max(max,arr[i])
        min=Math.min(min,arr[i])
    }
    let maxindex
    let minindex
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===max){
            maxindex=i
        }
        if(arr[i]===min){
            minindex=i
        }
    }
    if(arr[0]===arr[maxindex] && arr[arr.length-1]===arr[minindex]){
        return 0
    }
    for(i=0;i<maxindex;i++){
        max=Math.min(max,arr[i])
    }
    let profit=arr[maxindex]-max
    for(i=minindex+1;i<arr.length;i++){
        min=Math.max(min,arr[i])
    }
    profit=Math.max(profit,(min-arr[minindex]))
    
    
    return profit
}

// more optimal solution O(n)
function ObuySellStock(arr){
    let min=+Infinity
    let res=0
    for (let i = 0; i < arr.length; i++) {
        min=Math.min(arr[i],min)
        res=Math.max(res,arr[i]-min)
    }
    return res
}
let arr=[7,6,5,4,3,1]
// let arr=[2,4,1,7,5,0]
// let arr=[1,4,7,5,2,6,3]

// buySellStock(arr)
console.log(ObuySellStock(arr));
console.log(buySellStock(arr));
