function maxMinWeight(...n){
    const arr = [];

    for(let i = 0 ; i < n.length ; i++){
        if(true){
            arr.push(Math.min.apply(Math, n))
            break
        }
    }
    for(let i = 0 ; i < n.length ; i++){
        if(true){
            arr.push(Math.max.apply(Math, n))
            break
        }
    }
    return arr
}



console.log(maxMinWeight(75.3,60.5,50.5,83.4,92,90))