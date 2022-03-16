
///CIFRA POR ACSII

/*
 A B C D E F G H  I J K L 
 0 1 2 3 4 5 6 7 8 9 10 11 

M   N  O  P  Q  R  S  T  U  V 
12 13 14 15 16 17 18 19 20 21

 W  X  Y  Z     TOTAL: 26, pois começa no zero
22 23 24 25
*/

//X.charCodeAt() < Dizer numero do X

/*

Fórmula:
(codigodaletra + deslocamento) % tamanhodoalfabeto

exemplo:
3(codigo da letra original: D) + 7 (deslocamento, aonde vai parar) % 26 (se passar de 26, vai fazer a volta)

(("X.charCodeAt()" - codigodaprimeiraletra + deslocamento) % 26) + codigodaprimeiraletra

codigoda da letra no asc = x
codigodaprimeiraletra do asc = 65 = A

*/

// function cifra (str, chave){
// let entradastr = str.toUpperCase()
// let saidastr = entradastr.charCodeAt()
// let numerocodificado = ((saidastr - 65 + chave)%26)+65
// let letracodificada = String.fromCharCode(numerocodificado)
// return letracodificada
// }

//Cifra de Cesar

function cifra (str, chave){ //Frase e Numeração de salto(deslocamento)
    let entradastr = str.toLowerCase(); //Transforma toda string str em lower case
    let receptor = '' //Aonde ficará armazenado as variaveis - as letras codificadas
    for(let i = 0 ; i < entradastr.length ; i++){ //se i=0, loop vai acontecer ate chegar a quantidade de letras de entradastr
    
    let saidastr = entradastr[i].charCodeAt(); //entradastr[i].cdat = será lido o número de acordo com o loop e pegara seu code
    let numerocodificado = (((saidastr) - 97 + chave)%26)+97; //Fórmula para cifra de cesar
    var letracodificada = String.fromCharCode(numerocodificado); //transforma o número do code em letra novamente
    receptor += letracodificada //armazeona a letracodificada no recepto a cada loop
    }
    return receptor; //retorna o receptor ao fim de todos os loops
}
    



function cifra2(palavra, chave) {
    const entradaStr = palavra.toLowerCase();
    const lowerCaseACharCode = "a".charCodeAt(0); //Facilita para n precisar trocar 97 toda hora. Pois acha automaticamente o charcode de um alvo
  let receptor = "";
  for (let i = 0; i < entradaStr.length; i++) {
    const saidaStr = entradaStr[i].charCodeAt();
    const numeroCodificado = ((saidaStr - lowerCaseACharCode + chave) % 26) + lowerCaseACharCode; 
    const letraCodificada = String.fromCharCode(numeroCodificado);
    receptor += letraCodificada;
  }
  return receptor;
}



