function leituradenome (nome){
    let ignorarespaços = nome.replace(" ","").trim();
    let quantidadedeletras = ignorarespaços.length
    let maisculo = nome.toUpperCase();
    let minusculo = nome.toLowerCase();

    let resposta = `O seu nome é: ${nome}
    possui ${quantidadedeletras} letras 
    Todo ele em maísculo fica ${maisculo} 
    Todo ele em minusculo fica ${minusculo}`

    return resposta
} 

console.log(leituradenome('Igor Tamuz'))

