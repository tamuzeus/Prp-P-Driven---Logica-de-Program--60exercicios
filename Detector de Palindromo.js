
function wordPalindrome (string){
    const palavraMaiscula = string.toUpperCase();
    const palavraContraria = [];
    for(let i = palavraMaiscula.length; i >= 0 ;i--){
        const loop = palavraMaiscula[i];
        palavraContraria.push(loop)
    }
    const palavraemString = palavraContraria.toString().split(",").join("")

    if(palavraMaiscula === palavraemString){
        return true
    }
    return false
}


console.log(wordPalindrome('APOS A SOPA'))
