function detector(frase){
    let minusculo = frase.toLowerCase();
    let As = ''
    for(let i = 0; i <= minusculo.length ; i++){
        let contagem = minusculo[i];

        if (contagem == 'a' || contagem == 'á'){
            As += contagem
        }
        var quantidadedea = As.length;
    }
    let primeiravez = minusculo.indexOf('a')
    let ultimavez = minusculo.lastIndexOf('a')

    let resposta = `A quantidade de "A" presentes são de ${quantidadedea}! 
    A primeira vez que ele aparece é na posição: ${primeiravez}!
    A ultima vez que ele apreec é na posição ${ultimavez}!`
    return resposta
}

console.log(detector('Ola, bom dia como você vai?'))