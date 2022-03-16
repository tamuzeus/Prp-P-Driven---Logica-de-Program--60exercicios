function caminho (d, km){
    let carrodia = 60*d
    let kmrodado = 0.15*km

    let resposta = `Ficou com o carro por ${d} dia(s). O preço a ser pago é de R$ ${carrodia}. \n O carro percorreu:${km} km. O preço a ser pago por isso de  R$ ${kmrodado.toFixed(2)}. \n O total a ser pago é de: R$ ${kmrodado+carrodia}!`

    return resposta
}

console.log(caminho(8, 720))