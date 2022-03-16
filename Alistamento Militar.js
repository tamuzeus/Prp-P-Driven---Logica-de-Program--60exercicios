function alistamentoMilitar (anoNasci){
    const calculoIdade = 2022-anoNasci;
    const anosAtraso = calculoIdade - 18;
    if(calculoIdade > 18){
        const resposta = `Você está atrasado no alistamento! Com ${calculoIdade} está com ${anosAtraso} ano(s) de atraso!`;
        return resposta
    }
    else if(calculoIdade == 18){
        const resposta = `Você está na idade do alistamento! Com ${calculoIdade} anos!`;
        return resposta
    }
    else{
        const resposta = `Você está adiantado no alistamento! Com ${calculoIdade} está com ${anosAtraso*-1} ano(s) de adiantamento!`;
        return resposta
    }
};

console.log(alistamentoMilitar(2006));