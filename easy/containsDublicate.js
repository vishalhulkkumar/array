let arr = [4, 4];
arr.sort();
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
        console.log('true');
        return;
    }
}
console.log('false');