function medidordekm (n){

    if (n == 80){
        let resposta = `Sua velocidade é exatos 80 Km's, se ultrapassar isto será multado! Cuidado!`;
        return resposta
    }
    else if(n < 80){
        let resposta = `Sua velocidade é de ${n} Km's, abaixo do limite!`;
        return resposta
    }
    else if(n > 80){
        let calculo = (n-80)*7;
        let resposta = `Sua velocidade de ${n} Km's está a ${n-80} Km's acima do limite! \n Sua multa será de R$ ${calculo}!`;
        return resposta
    }

}

console.log(medidordekm(85))