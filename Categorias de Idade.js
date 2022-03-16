function idadeNatação (n){
    if( n >= 9 && n < 10){
        const resposta = `${n} você entra na categoria MIRIM`
        return resposta
    }

    else if(n >= 10 && n <= 14){
        const resposta = `${n} você entra na categoria INFATIL`
        return resposta
    }

    else if(n >= 15 && n <= 19){
        const resposta = `${n} você entra na categoria JUNIOR`
        return resposta
    }

    else if(n >= 20 && n <= 25){
        const resposta = `${n} você entra na categoria SENIOR`
        return resposta
    }

    else if(n > 25){
        const resposta = `${n} você entra na categoria MASTER`
        return resposta
    }
}


console.log(idadeNatação(26))