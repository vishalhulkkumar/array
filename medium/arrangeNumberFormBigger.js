//arr=[3,30,34,5,9]
// output--9534330
function mycompare(x,y){
    if(x+y>y+x){
        return -1
    }else{
        return 1
    }
}
function bigNum(arr){
    arr.sort(mycompare)//sort array with custom compare
    //sort array [ '9', '5', '34', '3', '30' ]
    let ans=''
    for (let i=0;i<arr.length;i++) {
        ans+=arr[i]
    }
    return ans
}
let arr=["3","30","34","5","9"]
console.log(bigNum(arr));



