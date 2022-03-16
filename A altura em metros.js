//A altura em metros
//L largura em metros

function pintura (a,l){
    let area = a*l;
    let tinta = area/2; //um litro de tinta pinta 2 metros de area, logo x/2

    let resposta = `\n Altura: ${a}m \n Largura: ${l}m \n Area: ${area}m^2 \n Tinta nescessária: ${tinta}m^2`;
    return resposta
}

console.log(pintura(5,5))