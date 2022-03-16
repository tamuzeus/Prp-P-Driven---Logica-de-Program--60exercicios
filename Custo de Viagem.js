function custodeViagem (n){
    if (n <= 200){
        let calculodeCustoExtra = n*0.50;
        let resposta = `Sua viagem é de ${n} Km, terá de pagar R$${calculodeCustoExtra}`
        return resposta
    }
    else if(n > 200){
        let calculodeCustoExtra = n*0.45;
        let resposta = `Sua viagem é de ${n} Km, terá de pagar R$${calculodeCustoExtra}`
        return resposta
    }
}

console.log(custodeViagem(150))

