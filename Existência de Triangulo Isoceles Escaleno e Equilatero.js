function existenciadeUmTriangulo (n1,n2,n3){
    let condiExis1 = n1+n2;
    let condiExis2 = n1+n3;
    let condiExis3 = n3+n2;
    if(condiExis1 > n3 && condiExis2 > n2 && condiExis3 > n1){

        if(n1 == n2 && n1 == n3 && n2 == n3){
            let textoInicial = `${n1}, ${n2} e ${n3}, podem formar um triangulo equilátero!`
            return textoInicial
        }
        else if (n1 != n2 && n1 != n3 && n2 != n3){
            let textoInicial = `${n1}, ${n2} e ${n3}, podem formar um triangulo escaleno!`
            return textoInicial
        }
        else{
            let textoInicial = `${n1}, ${n2} e ${n3}, podem formar um triangulo isoceles!`
            return textoInicial
        }
    }


    else{
        let resposta = `${n1},${n2},${n3} não podem formar um triangulo!`
        return resposta;
    }
}



console.log(existenciadeUmTriangulo(8,8,8))