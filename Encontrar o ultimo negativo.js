


function ultimoNegativo(lst){ //adicionar array na função
    let armazenar = '' //armazena o espaço para a resposta
    for(let i = 0 ; i < lst.length ; i++){
        let loop = lst[i] //fazer percorre cada numero da array 
        if (loop < 0){
            armazenar = loop //substitui sempre o numero negativoE anterior até chegar no de maior indice desejado/ultimo
        }
    }
   return armazenar
}
console.log(ultimoNegativo([4, 1, -3, 3, -2, 5, 12]))

