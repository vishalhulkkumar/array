// function mergeInterval(arr){
//     let res=[]
//     res.push(arr[0])
//     for (let i = 1; i < arr.length; i++) {
//         let last=res[res.length-1]
//         let curr=arr[i]
//         if(curr[0]<=last[1]){
//             last[1]=Math.max(last[1],curr[1])
//         }
//         else{
//             res.push(curr)
//         }
//     }
//     return res
// }

//
function mergeIntervalO(arr){
    let residx=0
    for (let i = 1; i < arr.length; i++) {
        if(arr[residx][1]>=arr[i][0]){
            arr[residx][1]=Math.max(arr[residx][1],arr[i][1])

        }
        else{
            residx++
            arr[residx]=arr[i]
        }
    }
    return residx+1
}
let arr=[[2,4],[5,8],[6,7],[1,3]]
arr.sort((a,b)=>a[0]-b[0])
let newsize=mergeIntervalO(arr)
for (let i = 0; i < newsize; i++) {
    console.log(arr[i]);
}

