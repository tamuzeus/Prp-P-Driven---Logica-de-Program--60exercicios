function conversorBiHexOct (n){
    const bi = n.toString(2); 
    const hex = n.toString(16);  
    const oct = n.toString(8);   
    const resposta = `O número ${n}, tem como: \n Binário: ${bi} \n HexaDecimal: ${hex} \n Octal: ${oct}\n`
    return resposta
}

console.log(conversorBiHexOct(1))