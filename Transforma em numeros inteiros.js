function inteiro (n){
    let calculo = n.toFixed(0);
    let resposta = `A parte inteira de ${n} é ${calculo}!`
    return resposta
}

console.log(inteiro(2.84))