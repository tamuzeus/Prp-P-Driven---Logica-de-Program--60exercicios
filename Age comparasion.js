function ageComparasion(...ages){
    const twentyYears = []
    let mostOld = [];
    let calc = 0;

    //Twenty Years 
    for(let i = 0 ; i < ages.length ; i++){
        const loop = ages[i]
        if(loop <= 20){
        twentyYears.push(loop)}  
    }

    //Most Old
    for(let i = 0 ; i < ages.length ; i++){
        mostOld.push(Math.max.apply(Math, ages))
        break
        }  
    

    //Calc for avarage
    for(let i = 0 ; i < ages.length ; i++){
        calc += ages[i]
        }

        //end of function 
        let avarage = calc/ages.length
        return avarage.toFixed(2)
    }

console.log(ageComparasion(20,22,26,10,32,35,14))