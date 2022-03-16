function contagemRegressiva (inicio){
    let armazenamento = '';
    for(let i = inicio; i-1 >= 0 ;i--){ //-1 na frente é para ignorar o undefined no inicio e fim de cada array = o umero extra
        armazenamento += i + "\n" 
    }
    return armazenamento
}

console.log(contagemRegressiva(10))