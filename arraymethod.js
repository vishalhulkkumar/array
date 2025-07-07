let arr=[1,2,34,5]
const combswithfirst=[]
arr.forEach(comb=>{
const combwithfirst=[...comb,firstEl]
combswithfirst.push(combwithfirst)
})
console.log(combswithfirst);
