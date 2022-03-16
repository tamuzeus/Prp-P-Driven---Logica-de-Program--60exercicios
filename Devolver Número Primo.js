//Devolver numeros primos

//Essa função será para identificar os numeros primos
function isPrime(n) { 
    for (let i = 2; i <= n - 1; i++){ //A contagem inicia no 2, pois tem que ignorar o numero 0 e 1 pois já são divisiveis.
                                      //o -1, significa que so vai ate o numero anterior a este, pois ele já é divisivel por sí mesmo
      if (n % i === 0) return false; //n % 1 === 0, ira identificar se o restante dele for zero comparado aos numeros passados pelo index, caso seja, ele não é primo. 
      //Podemos obeservar no caso do dois que: o anterior de 2 é 1, e o contador começa no 2, logo ele ja se encaixa como primo pois o resultado de 1%2 não é 0, mas 2%1 sim
    }
    return true; //Se sair do if, ele é primo e retorna como true
  }
  
  //Essa função será para armazenar os números
  function primeNumberIdentifier(...n) { //recebe os numeros e os transforma em array
    const primes = []; //armazena os primos em array 
    for (let i = 0; i < n.length; i++) { //faz a leitura dos numeros dentro da array pelo indice
      const currentNumber = n[i]; //armazena o numero com seu 'nome' (n[i]), aonde i ler o indice e ao estar com 'n' transforma em nome

      if (isPrime(currentNumber)) { //se a função retorna true!
        //Colocando a função isPrime dentro do if e currentNumber como parametro, a cada ciclo os numeros serão postos dentro do current number e irão acessar a função aonde serão confirmadas se são ou não primos!
        primes.push(currentNumber); //adição do numero primo após o ciclo
      }

    }
    return primes;
  }

  console.log(primeNumberIdentifier(2, 3, 4, 5, 6, 7));
  
  //map - mapeia um array para outro array
  
  // const arr = [1, 2, 3];
  
  // console.log(arr.map(function (el) {
  //   return el * 2
  // }));
  
  // function map(array, fn) {
  //   const newArray = [];
  //   for (let i = 0; i < array.length; i++) {
  //     newArray.push(fn(array[i]));
  //   }
  //   return newArray
  // }
  
  // console.log(
  //   map(arr, function (el) {
  //     return el * 2;
  //   })
  // );
  
  // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  // console.log(nums.filter(function (el) {
  //   return el % 2 === 0
  // }))
  
  // console.log(nums.filter(num => num % 2 === 0));
  
