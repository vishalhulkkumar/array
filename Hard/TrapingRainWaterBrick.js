function trapwater(arr){
    let l=0
    let r=1
    let Cwater=0
    let n=arr.length-1
    // let Twater=0
    let brick=0
    while(r<n){
        if(arr[r]>arr[l]){
            Cwater+=(r-l-1)*arr[l]-brick
            l=r
            brick=0
            r++
        }
        else{
            brick+=arr[r]
        }
        r++
        // console.log(l,r,Cwater);
        
    }
    // console.log(l,r);
    
    return Cwater
}
// let arr=[3,2,1,2,1]
// let arr=[0,1,0,2,1,0,1,3]
let arr=[0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trapwater(arr));
