function detectorOfPrimeNumbers (number){
    for (let i = 2 ; i < number - 1 ; i++){
        if(number % i === 0) return false
    }
    return true
}


function resolutionOfPrimeFinder(...n){
    const primeNumbers = []
    for(let i = 0 ; i < n.length ; i++){
        let loop = n[i]
        if(detectorOfPrimeNumbers(loop)){
            primeNumbers.push(loop)
        }
    }
    return primeNumbers
}


console.log(resolutionOfPrimeFinder(2,3,4,5,6,7,8,9,10))