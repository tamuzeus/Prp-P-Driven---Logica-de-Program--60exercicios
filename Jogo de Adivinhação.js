function leitura (n){
    let array = [0,1,2,3,4,5]
    let random = Math.floor(Math.random() * array.length)
    
    if(n == random){
        let vitoria = `Parabéns! Você venceu! Adivinhou que o número era ${random}`
        return vitoria
    }

    else if( n != random){
        let derrota = `Você perdeu, o número era ${random}`
        return derrota
    }
}

console.log(leitura())