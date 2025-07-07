function RepeatedAndMissing(arr){
    let n=arr.length
    let missing=n*(n+1)/2
    for (let i = 0; i < arr.length; i++) {
        //Math.abs(n) return the distance from 0 always positive or can say return module of number|-n|=n
        let absolute=Math.abs(arr[i])
        if(arr[absolute-1]>=0){
            arr[absolute-1]=-arr[absolute-1]
            missing-=absolute
        }
        else{
            console.log("Repeated element is "+absolute)
        }
    }
    return missing
}
let arr=[4,3,2,3,5]
console.log("missing element is "+RepeatedAndMissing(arr));
