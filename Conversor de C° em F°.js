function conversor (c){
    let calculo = (c * 9/5) + 32;
    let resposta = `${c}°c é igual a ${calculo} °F`

    return resposta
}
 
console.log(conversor(2))