function selecionarlista (n){
    let alunos = ['Pedro', 'José', 'Joana', 'Paula'];

    return alunos[n];
}
console.log(selecionarlista(0))


function randomalunos (){
    const alunos = ["Pedro", "Jose", "Carlos", "Antonio"]; //array com a quantidade de alunos presentes

    const random = Math.floor(Math.random() * alunos.length); 
    //math.flor = pegra o menor numero/inteiro
    //math random() = randomiza um número de 0 a 1
    //alunos.length = vai pegar a array e transformar cada nome em um número
    //o numero aleatorio vai ser multiplicado pelo length do total de coisas na array
    //nisso, será pego pelo math.florr e transformado em inteiro e armazenado em random

    let resposta = alunos[random];
    //alunos = array
    //random é o número aleatorio armazendo
    //alunos[random] = o número aleatorio de 0 a 3 será acessado e transformado em nome novamente

    return resposta
}
console.log(randomalunos()) //resposta, sem precisar por nada, pois é apenas uma ativação sem parametros.