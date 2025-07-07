// let arr=[2,3,4,5,7,12]
let arr=[7,3,2,4,9,56]
let student=3
arr.sort()
console.log(arr);

let min=+Infinity
let diff=0
function choclateDistribution(arr,m){
    // console.log(arr);
    
     for (let i = 0; i < arr.length-m; i++) {
        diff=arr[i+m]-arr[i]
        min=Math.min(diff,min)

        console.log(diff);
     }
}
choclateDistribution(arrs,student)

