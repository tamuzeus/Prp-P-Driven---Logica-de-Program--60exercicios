function imparPar(n){
    if(n % 2 == 0){
        let resposta = `O número ${n} é par`
        return resposta
    }

    else{
        let resposta = `O número ${n} é impar`
        return resposta
    }
    
}

console.log(imparPar(112))