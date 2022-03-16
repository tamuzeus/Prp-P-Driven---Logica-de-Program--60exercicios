function preçodeCompra (preço, condPag){
    //Á vista, dinheiro/cheque - 10% de desconto!
    if(condPag == 1){
        const calculoPreço = preço - (preço*10/100);
        const resposta = `Você escolheu a opção de pagamento em dinheiro/cheque! \n Com o desconto de 10%, de R$${preço} vai para R$${calculoPreço}!`;
        return resposta
    }
     //Á vista, cartão - 5% de desconto!
    else if(condPag == 2){
        const calculoPreço = preço - (preço*5/100);;
        const resposta = `Você escolheu a opção de pagamento a vista no cartão! \n Com o desconto de 5%, de R$${preço} vai para R$${calculoPreço}!`;
        return resposta
    }
     //Em até 2x no cartão: preço normal!
    else if(condPag == 3){
        const calculoPreço = preço/2;
        const resposta = `Você escolheu a opção de dividir em 2x no cartão! \n De R$${preço} vai para R$${calculoPreço}!`;
        return resposta
    }

    //3x ou mais no cartão: +20% na parcela!
    else if(condPag == 4){
        const calculoPreço1 = preço + (preço*20/100);
        const calculodePreço2 = calculoPreço1/3;
        const resposta = `Você escolheu a opção de dividir em 3x no cartão! \n De R$${preço}, recebendo +20% de juros, vai para R$${calculodePreço2}!`;
        return resposta
    }
}


console.log(preçodeCompra(200, 4))