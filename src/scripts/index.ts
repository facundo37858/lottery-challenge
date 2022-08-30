
const randomNumberByInterval=(numberMax:number,numberMin:number):number =>{
    return Math.round(Math.random()*(numberMax-numberMin)+numberMin)
}

const generateMatrizNumbers=(initIntervalNum:number,endIntervalNum:number,initNumToCompare:number=0,arrNumbers:number[]=[]):number[]=>{
  
    if(arrNumbers.length === 2){
        return arrNumbers
    }

    let ramdomNum=randomNumberByInterval(endIntervalNum,initIntervalNum)
           
    if(ramdomNum !== initNumToCompare){
        console.log('continue',arrNumbers)
        return generateMatrizNumbers(initIntervalNum,endIntervalNum,initNumToCompare=ramdomNum,[...arrNumbers,ramdomNum])
    }
    return generateMatrizNumbers(initIntervalNum,endIntervalNum,initNumToCompare=ramdomNum,arrNumbers)
}
