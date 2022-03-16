function somarImparesMultdeTrês(n){
    let armazenamento = ''
    for(let i = 1 ; i-1 < n; i++){
        const calculo = i%3
        if(calculo == 0){
            armazenamento += i + '\n'
        }
    }
    return armazenamento
}


console.log(somarImparesMultdeTrês(10))