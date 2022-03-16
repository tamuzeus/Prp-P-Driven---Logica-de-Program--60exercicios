function majority (...number){
    const ages = [];
    for(let i = 0;  i < number.length ; i++){
        const loop = number[i]
        if(loop >= 18){
            ages.push(loop)
        }
    }
    const answer = `${ages.length} people are of legal age!`
    return answer
}

console.log(majority(16,14,18,32,20,14))