function imc (peso,altura){
    const calculoImc = peso / (altura**2);
    if(calculoImc < 18.5){
        const resposta = `Seu peso de ${peso} KG te encaixa no IMC ${calculoImc.toFixed(2)}! \n Abaixo do peso ideal!`
        return resposta
    }
    else if(calculoImc >= 18.5 && calculoImc < 25){
        const resposta =`Seu peso de ${peso} KG te encaixa no IMC ${calculoImc.toFixed(2)}! \n No peso ideal!`
        return resposta
    }
    else if(calculoImc >= 25 && calculoImc < 30){
        const resposta =`Seu peso de ${peso} KG te encaixa no IMC ${calculoImc.toFixed(2)}! \n Sobrepeso!`
        return resposta
    }
    else if(calculoImc >= 30 && calculoImc < 40){
        const resposta =`Seu peso de ${peso} KG te encaixa no IMC ${calculoImc.toFixed(2)}! \n Obesidade!`
        return resposta
    }
    else{
        const resposta =`Seu peso de ${peso} KG te encaixa no IMC ${calculoImc.toFixed(2)}! \n Obesidade Mórbida!`
        return resposta
    }
}

console.log(imc(60, 1.80));