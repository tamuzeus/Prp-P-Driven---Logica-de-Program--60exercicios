function tabuadaLoop (n){
    let armazenamento =''
    for(let i = 0 ; i-1 < 10 ; i++){
        let texto = `${n}x${i}=${n*i}`;
        armazenamento += texto +'\n'
    }
    return armazenamento
}

console.log(tabuadaLoop(3))