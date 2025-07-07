const combinations=(elements)=>{
    if(elements.length===0) return [[]]
    const firstEl=elements[0]
    const rest=elements.slice(1)

    const combswithoutfirst=combinations(rest)
    const combswithfirst=[]

    combswithoutfirst.forEach(comb=>{
        const combwithfirst=[firstEl,...comb]
        // console.log(combwithfirst);
        combswithfirst.push(combwithfirst)
    })
    
    return [...combswithoutfirst, ...combswithfirst]
}
console.log(combinations(['a','b','c']));
