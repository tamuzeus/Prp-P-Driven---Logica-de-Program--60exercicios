function hipotenusa (co,ca){
    let calculo = (co**2)+(ca**2);
    let calculo2 = Math.sqrt(calculo);
    let resposta = `O cateto oposto ${co} e o cateto adjacente ${ca} formam a hipotenusa ${calculo2.toFixed(2)}`

    return resposta
}

console.log(comprimento(3.5, 4.75))