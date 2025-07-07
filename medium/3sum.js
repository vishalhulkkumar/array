function Sum3(arr,sum){
    arr.sort()
    let n=arr.length
    for (let i = 0; i < n-2; i++) {
        let st=i+1
        let end=n-1
        while(st<end){
            if((arr[i]+arr[st]+arr[end])===sum){
                console.log(arr[i],arr[st],arr[end]);
                
                return true
            }
            else if((arr[i]+arr[st]+arr[end])<sum){
                st++
            }
            else{
                end--
            }
        }
    }
    return false
}
// let arr=[2,3,-1,0,5,-8]
let arr=[1,4,45,6,10,8]

console.log(Sum3(arr,22));
