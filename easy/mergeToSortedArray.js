function mergeSortedArray(A,B,m,n){
    let i=m-1
    let j=n-1
    let inx=n+m-1
    while(i>=0 && j>=0){
        if(A[i]>=B[j]){
            A[inx]=A[i]
            inx--
            i--
        }
        else{
            A[inx]=B[j]
            inx--
            j--
        }
    }
    while(j>=0){
        A[inx]=B[j]
        inx--
        j--
    }
    return A
}
let A=[1,2,3,0,0,0]
let B=[2,5,6]
let m=3
let n=3
console.log(mergeSortedArray(A,B,m,n));
