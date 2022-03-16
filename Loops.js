
//while

function tabuadawhile (n1){
    let numero = 0
    while(numero <= 10){
      var resposta = `${n1} x ${numero} = ${n1*numero}`
      numero += 1
    }
    return resposta
}

//For

function tabuadafor (n1){
    for(let numero = 0 ; numero <= 10;numero++){
        var resposta = console.log(`${n1} x ${numero} = ${n1*numero}`)
    }
    return resposta
}

function calculadora (n1){
    let numero = 0
    while (numero <= 10){
        var resposta = console.log(`${n1} x ${numero} = ${n1*numero}`)
        numero +=1
    }
    return resposta
}