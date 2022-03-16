function cidade (nome){
    let maisc = nome.toUpperCase();
    let include = maisc.includes('SANTO')
    if (include == true){
        let fim = `A cidade ${maisc} tem o nome SANTO nela!`
        return fim
    }
    else if (maisc != 'SANTO'){
        let fim = `A cidade ${maisc} não tem o nome SANTO nela!`
        return fim
    }
}

console.log(cidade('SANTOS ANTONIO'))

