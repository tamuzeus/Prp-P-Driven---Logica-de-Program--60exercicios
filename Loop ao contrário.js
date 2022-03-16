
function loopContrario (n){
    for(let i = n.length; i > 0 ;i--){ //I igual a quantidade de coisas em length, enquanto i for maior que zero, perderá 1 numero a cada loop. Isso fará loop reverso
        let loop = n[i] //Le o index i do loop e transformara no numero de dentro da array n
        if(loop < 0){ //Se for negativo entra
            return loop //o primeiro a aparecer foi o -2, logo ele será o primeiro armazenado
        }
    }
  return false //depois do loop, se nenhum negativo for encontrado o resultado é false
}

console.log(loopContrario([3,2,-3,4,1,-2,12,24]))