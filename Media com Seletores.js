function mediaComSeletores (n1,n2){
    const mediaAluno = (n1+n2)/2
    if(mediaAluno >= 7){
        const resposta= `Sua primeira nota é ${n1} \n Sua segunda nota é ${n2} \n Sua média é de ${mediaAluno} \n Está APROVADO!` ;
        return resposta
    }
    else if(mediaAluno >= 5 && mediaAluno <= 6.9){
        const resposta= `Sua primeira nota é ${n1} \n Sua segunda nota é ${n2} \n Sua média é de ${mediaAluno} \n Está de RECUPERAÇÃO!` ;
        return resposta
    }
    else if(mediaAluno < 5){
        const resposta= `Sua primeira nota é ${n1} \n Sua segunda nota é ${n2} \n Sua média é de ${mediaAluno} \n Está REPROVADO!` ;
        return resposta
    }
}   

console.log(mediaComSeletores(10,3.8))