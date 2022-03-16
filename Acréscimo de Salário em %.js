function salario (s,a){
    let calculo = s + (s * a/100) 
    let resposta = `Seu salário é de $${s} \n Com o aumento de ${a}%, ficará: $${calculo}`
    return resposta
}

console.log(salario(100.30,50))