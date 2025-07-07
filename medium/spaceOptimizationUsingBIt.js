let arr=[2,10]
let ans=''
for (let i = arr[0]; i < arr[1]; i++) {
    if((i%2)==0 || (i%5)==0){
        ans+=`${i} 
        `
    }
}
console.log(ans);
