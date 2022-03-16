function joKenPon(escolha){
    const escolhas = ['Pedra','Papel','Tesoura'];
    const random = Math.floor(Math.random() * escolhas.length)
    const confirmação = escolhas[random]

    if(escolha == 0){
        if(random == 0){
            const resposta = `Você escolhe Pedra! O computador escolheu ${confirmação}, empate!`;
            return resposta 
        }
        else if(random == 1){
            const resposta = `Você escolhe Pedra! O computador escolheu ${confirmação}, você perdeu!`;
            return resposta
        }
        else if(random == 2){
            const resposta = `Você escolhe Pedra! O computador escolheu ${confirmação}, você venceu!`;
            return resposta
        }
    }

    else if(escolha == 1){
        if(random == 0){
            const resposta = `Você escolhe Papel! O computador escolheu ${confirmação}, você venceu!`;
            return resposta 
        }
        else if(random == 1){
            const resposta = `Você escolhe Papel! O computador escolheu ${confirmação}, empate!`;
            return resposta
        }
        else if(random == 2){
            const resposta = `Você escolhe Papel! O computador escolheu ${confirmação}, você perdeu!`;
            return resposta
        }
    }

    else if(escolha == 2){
        if(random == 0){
            const resposta = `Você escolhe Tesoura! O computador escolheu ${confirmação}, você perdeu!`;
            return resposta 
        }
        else if(random == 1){
            const resposta = `Você escolhe Tesoura! O computador escolheu ${confirmação}, você venceu!`;
            return resposta
        }
        else if(random == 2){
            const resposta = `Você escolhe Tesoura! O computador escolheu ${confirmação}, empate!`;
            return resposta
        }
    }
    const erro = 'Digite um numero válido'
    return erro
}

// 0 = Pedra
// 1 = Papel
// 2 = Tesoura
console.log(joKenPon(0))