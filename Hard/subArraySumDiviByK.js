//longest subarray needed
function subArraySize(arr,k){
    let map=new Map()//created for store the mod of number
    //Map() method-->set(),has(),get(),size(),delete(),clear()
    let sum=0//iterate sum and add mod of sum in map
    let ans=0//map length
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
        let mod=((sum%k)+k)%k//to handel the negative number
        if(mod==0){
            ans=i+1
        }
        else if(map.has(mod)==false){
            map.set(mod,i)
        }
        else{
            ans=i-map.get(mod)
        }
    }
    return ans
}
let arr=[3,4,15,6,13,2,8,5,22]
let k=3
console.log(subArraySize(arr,k));
