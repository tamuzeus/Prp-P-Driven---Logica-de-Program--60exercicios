//Calcular 10 primeiros numeros de uma p.a
//pegar primeiro termo
//pegar a razão


function arithmetichProgression (number, commomDifference){
    const arrayAP = [number, number+commomDifference];
    for (let i = 2; i <= 9 ; i++){
        let calc = number+(i*commomDifference)
        arrayAP.push(calc)
    }
    return arrayAP
}


console.log(arithmetichProgression(0,2))