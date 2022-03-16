function aumentodeSalario(n) {
    if(n > 1250){
        let calculoSalarial = n + (n*10/100);
        let resposta = `Seu salário é de ${n}, com o acréscimo de 15% fica com ${calculoSalarial}`
        return resposta
    }

    else if(n <= 1250){
        let calculoSalarial = n + (n*15/100);
        let resposta = `Seu salário é de ${n}, com o acréscimo de 15% fica com ${calculoSalarial}`
        return resposta
    }
}

console.log(aumentodeSalario(900))