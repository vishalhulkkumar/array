function nextPermutaion(arr){
    let ind=-1
    n=arr.length
    for(i=n-2;i>=0;i--){
        if(arr[i]<arr[i+1]){
            ind=i
            break
        }
    }
    //if arr is in decreasing order so next permutaion is in inreasing order
    if(ind===-1){
        arr.reverse()
        return arr
    }
    for(j=n-1;j>ind;j--){
        if(arr[j]>arr[ind]){
            //swap
            [arr[j],arr[ind]]=[arr[ind],arr[j]]
            break
        }
    }
    let left=ind+1
    let right=n-1
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]
        left++
        right--
    }
    return arr
}
let arr=[5,2,9,8]
console.log(nextPermutaion(arr));
