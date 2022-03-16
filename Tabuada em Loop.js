function tabuada (n1){
    let salvar = ''
    for(let i = 1; i <= 10; i++){
    let resposta = `${n1} x ${i} = ${n1*i}`
    salvar += resposta + '\n';
    }
    return salvar
}

console.log(tabuada(2))
