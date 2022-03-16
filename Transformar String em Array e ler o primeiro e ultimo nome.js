function primeiroultimo (nome){
    let nomearray = nome.split(" ")
    let primeironome = nomearray[0];
    let ultimonome = nomearray[nomearray.length -1];

    resposta = "Seu nome completo é "+ nome +"\n Seu primeiro nome é "+ primeironome +"\n Seu ultimo nome é "+ ultimonome; 

    return resposta
}

console.log(primeiroultimo('Paulo Cesar Coelho'))



