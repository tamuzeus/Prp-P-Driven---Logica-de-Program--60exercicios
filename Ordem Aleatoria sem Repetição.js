function sorteioordemcomrepetição () {
    let alunos = ['Pedro','Antonio','Pedro','Jóse'];
    let ordem = '';
    for(let i = 0 ; i <= 3 ; i++){
        let random = Math.floor(Math.random()*alunos.length);
        let intexto = `${i}° é ${alunos[random]} \n`
        ordem += intexto
    }
    return ordem
}

console.log(sorteioordemcomrepetição())


function ordemaleatoria () {
    let alunos = ['Pedro','Antonio','Paulo','Jóse']; //array
    let alunossorteados = alunos.sort(()=> Math.random()-0.5)
    //alunos.sort = organiza.
    //() => arrayfunction
    //Math.random() = numero randomizado.
    //math.random()-0.5 = sutrair 0.5 do numero randomizado. Isso vai alterar as posições pois sempre serão numeros diferentes.
    //tudo será armazenado em alunos sorteados

    let ordem = '' //armazena a resposta

    for(let i = 0 ; i <= 3 ; i++){
        let intexto = `${i+1}° é ${alunossorteados[i]} \n`
        //i+1 = vai impedir que o i seja zero no console.
        //alunossorteados [i] vai mostrar o aluno da lista de acordo com o loop (o sorteio ja foi fixado antes)

        ordem += intexto
        ///armazena cada volta do intexto aqui dentro
    }
    return ordem //resposta
}

console.log(ordemaleatoria())