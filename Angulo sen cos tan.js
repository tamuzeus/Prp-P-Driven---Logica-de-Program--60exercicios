function angulo (ang){
    let rad = ang * Math.PI/180;
    let sen = Math.sin(rad);
    let cos = Math.cos(rad);
    let tan = Math.tan(rad);

    let resposta = `O seno de ${ang}° é de ${sen.toFixed(2)} \n O cosseno de ${ang}° é de ${cos.toFixed(2)} \n A tangente de ${ang}° é de ${tan.toFixed(2)} \n `
    return resposta
}

console.log(angulo(30))