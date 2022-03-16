function lernumeros (n){
    let unidade =Math.floor(n /1%10)
    let dezena = Math.floor(n /10%10)
    let centena =Math.floor(n /100%10)
    let milhar = Math.floor(n /1000%10);
    
    let resposta =  
    `Unidade: ${unidade}
     Dezena: ${dezena}
     Centena: ${centena}
     Milhar: ${milhar}`

     return resposta
}

console.log(lernumeros(2345))

