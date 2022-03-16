function comparadordeNumeral (n1,n2){
    if(n1 > n2){
        const resposta = `${n1} é maior que ${n2}`
        return resposta
    } 
    else if( n1 < n2){
        const resposta = `${n2} é maior que ${n1}`
        return resposta
    }
    else{
        const resposta = `${n1} é igual a ${n2}`
        return resposta
    }
}
console.log(comparadordeNumeral(5,5))