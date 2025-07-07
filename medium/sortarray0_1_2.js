// //by sorting
let arr=[1,0,0,2,1,0,2,0,0,1,1]
arr.sort()
console.log(arr);


// //optimized aproach
let count0=0
let count1=0
let count2=0
for (let i = 0; i < arr.length; i++) {
    if(arr[i]===0){
        count0++
    }else if(arr[i]===1){
        count1++
    }else{
        count2++
    }
}
for (let i = 0; i < count0; i++){
    arr[i]=0
}
for (let i = count0; i < count0+count1; i++){
    arr[i]=1
}
for (let i = count0+count1; i < count0+count1+count2; i++){
    arr[i]=2
}
console.log(arr);

//optimal aproach Dutch National flag Algo
function sort012(arr) {
    let l=0//low
    let m=0//medium
    let h=arr.length-1//high
    while(m<=h){
        if(arr[m]===0){
            [arr[l],arr[m]]=[arr[m],arr[l]]
            l++
            m++
        }
        else if(arr[m]===1){
            m++
        }
        else{
            [arr[h],arr[m]]=[arr[m],arr[h]]
            h--
        }
    }
    return arr
}

console.log(sort012(arr));
