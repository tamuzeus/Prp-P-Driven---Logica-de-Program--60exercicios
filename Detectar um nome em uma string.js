function silva (nome){
    let nomedig = nome.toUpperCase();
    if(nomedig.includes('SILVA')){
        let fim = `O nome ${nomedig} inclui "SILVA" nele!`
        return fim;
    }
    else{
        let fim = `O nome ${nomedig} NÃO inclui "SILVA" nele!`
        return fim;
    }
}

console.log(silva('Igor Tamuz da Silva '))