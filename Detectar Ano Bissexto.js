function anoBissexto(n){
    let calcBis1 = n/4 
    let calcBis2 = n/100 
    let calcBis3 = n/400
    if(calcBis1 % 1 === 0 && calcBis2 % 1 === 0 && calcBis3 % 1 === 0){
        let resposta = `${n} é um ano bissexto!`
        return resposta
    }

    else{
        let resposta = `${n} não é um ano bissexto!`
        return resposta
    }
}

console.log(anoBissexto(5000))