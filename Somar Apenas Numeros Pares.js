function somaPares(...nums) { //Array dos numeros
    let pares = []; //Array aonde os pares vão ser armazenados
    let soma = 0; //Resposta da soma
    for (let i = 0; i < nums.length; i++) { //Ler a quantidade de itens na array
      const numero = nums[i]; //Ler o indice do array(o nome do numero i/loop)
      if (numero % 2 === 0) {
        pares.push(numero); //Adicionar apenas os pares na array
      }
    }
    for (let i = 0; i < pares.length; i++) { //Ler os numeros dentro da array
      soma += pares[i]; //Pegar os indices da array, somando e adicionando na area de soma
    }
    return soma; //resposta
  }
//Recebendo os números em array

console.log(somaPares(2,3,6))