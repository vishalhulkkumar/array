function singleElement(arr){
    st=0
    end=arr.length-1
    while(st<=end){
        let mid=Math.floor(st+(end-st)/2)
        if(mid===0 && arr[0]!==arr[1]){
            return arr[mid]
        }
        if(mid===arr.length-1 && arr[arr.length-1]!==arr[arr.length-2]){
            return arr[arr.length-1]
        }
        if(arr[mid-1]!==arr[mid] && arr[mid+1]!==arr[mid]){
            return arr[mid]
        }
        if((mid)%2==0){
            if(arr[mid-1]===arr[mid]){
                //element on left side
                end=mid-2
            }
            else{
                //element on right side
                st=mid+1
            }
        }
        else{
            if(arr[mid-1]===arr[mid]){
                //element on right side
                st=mid+1
            }
            else{
                //element on left side
                end=mid-1
            }
        }

    }
    return -1
}

let arr=[1,1,2,3,3,4,4]
console.log(singleElement(arr));

