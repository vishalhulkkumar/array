function pivot(arr,st,end){
    if(arr[st]<arr[end]){
        return st
    }
    while(st<=end){
        let mid=Math.floor((st+(end-st)/2))
        if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1] ){
            return mid+1
        }
        else if(arr[mid]<arr[0]){
            end=mid-1
        }
        else{
            st=mid+1
        }
    }
    return -1
}

function pairOfSum(arr, sum) {
    let n = arr.length;
    let st = 0;
    let end = n - 1;

    // Find the pivot (smallest element) in the rotated array
    let pivotIdx = pivot(arr, st, end);

    // st will point to the smallest element (pivot)
    st = pivotIdx;
    // end will point to the largest element (pivot - 1, wrapped circularly)
    end = pivotIdx - 1 ;

    while (st != end) {
        let currSum = arr[st] + arr[end];

        if (currSum === sum) {
            console.log(`Pair found: ${arr[st]} and ${arr[end]}`);
            return true;
        } else if (currSum < sum) {
            st = (st + 1) % n;  // Move st right, circularly
        } else {
            end = (end - 1 + n) % n;  // Move end left, circularly
        }
    }

    return -1;  // If no pair is found
}

let arr=[11,15,16,17,6,8,9,10]
console.log(pairOfSum(arr,31));

