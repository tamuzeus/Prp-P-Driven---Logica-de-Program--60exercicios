function empréstimo (vCasa,slrio,qntAnos){
    let prestaçãoMensal = vCasa/(qntAnos*12); //preço da prestação. Existem 12 meses.
    let máximoAoMês = slrio*30/100;
    if(máximoAoMês >= prestaçãoMensal){
        let resposta = `Empréstimo Aprovado! 30% do seu salário é R$${máximoAoMês}, o gasto da casa será de R$${prestaçãoMensal.toFixed(2)}!`
        return resposta
    }
    else{
        let resposta = `Empréstimo Negado! 30% do seu salário é R$${máximoAoMês}, o gasto da casa será de R$${prestaçãoMensal.toFixed(2)}, logo é inferior!`
        return resposta
    }
}


console.log(empréstimo(20000,1600,7))