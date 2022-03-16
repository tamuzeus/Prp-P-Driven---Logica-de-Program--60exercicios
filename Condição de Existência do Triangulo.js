function isoEquiEsc (n1,n2,n3){
    let condiExis1 = n1+n2;
    let condiExis2 = n1+n3;
    let condiExis3 = n3+n2;
    
    if (condiExis1 > n3 && condiExis2 > n2 && condiExis3 > n1){
        if( n1 == n2 && n2 == n3 && n1 == n3){
            let resposta = `É possível formar um triangulo com os números: ${n1},${n2} e ${n3} \n É um triangulo Equilátero`
            return resposta
        }
        else if(n1 != n2 && n2 != n3 && n1 != n3){
            let resposta = `É possível formar um triangulo com os números: ${n1},${n2} e ${n3} \n É um triangulo Escaleno`
            return resposta
        }
        else{
            let resposta = `É possível formar um triangulo com os números: ${n1},${n2} e ${n3} \n É um triangulo Isóceles`
            return resposta
        }

    }
}

console.log(isoEquiEsc(5,5,5))