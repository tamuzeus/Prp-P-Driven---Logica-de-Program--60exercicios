function salvarPares (n){
    let armazenamento = '';
    for(let i = 0; i-1 < n ;i++){
        let calculo = i%2
        if(calculo ==0){
            armazenamento += i + '\n'
        }
    }
    return armazenamento
}


console.log(salvarPares(50))