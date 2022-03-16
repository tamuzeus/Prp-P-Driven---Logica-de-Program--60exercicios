function desconto (n, d){
    var calculo = n - (n * d/100) //n * d/100 = d% do valor, depois basta subtrarir este do valor original para subtrair os d%

    var resposta = `Valor original: ${n} \n Valor com desconto de ${d}%: ${calculo}`
    return resposta
}

console.log(desconto(100,50))