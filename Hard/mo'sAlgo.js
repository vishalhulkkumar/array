function sumOfInterval(arr,Q){
    let m=Q.length
    Q.sort()
    let currL=Q[0][0]
    let currR=Q[0][1]
    let currsum=0
    for (let i = currL; i <= currR; i++) {
        currsum+=arr[i]
    }
    console.log(`[${Q[0]}]-->${currsum}`);
    for (let i = 1; i < m; i++) {
        let L=Q[i][0]
        let R=Q[i][1]
        while(currL<L){
            currsum-=arr[currL]
            currL++
        }
        if(currR<R){
            while(currR<R){
                currR++
                currsum+=arr[currR]
            }
        }
        else{
            while(currR>R){
                currsum-=arr[currR]
                currR--
            }
        }
        console.log(`[${Q[i]}]-->${currsum}`);
    }
}
let arr=[1,2,3,2,3,4,5]
let Q=[[0,4],[1,3],[2,4],[1,6]]//we have to print all range sum-->[7,11,8]
sumOfInterval(arr,Q)

