
const randomNumberByInterval=(numberMax:number,numberMin:number):number =>{
    return Math.round(Math.random()*(numberMax-numberMin)+numberMin)
}
const uniqueValueVerification=(arrOfNumbers:number[],numberToVerify:number):boolean=>{
   return arrOfNumbers.includes(numberToVerify)
  
}
const generateMatrizNumbersForColumn=(initIntervalNum:number,endIntervalNum:number,arrNumbers:number[]=[]):number[]=>{
  
    if(arrNumbers.length === 3){
        return arrNumbers
    }

    let ramdomNum=randomNumberByInterval(endIntervalNum,initIntervalNum)
           
    if(!uniqueValueVerification(arrNumbers,ramdomNum)){
        return generateMatrizNumbersForColumn(initIntervalNum,endIntervalNum,[...arrNumbers,ramdomNum])
    }

    return generateMatrizNumbersForColumn(initIntervalNum,endIntervalNum,arrNumbers)
}
const generateMatrixByTicket=(sizeTicket:number):number[][]=>{
    const matiz:number[][]=[]
    let initInterval=1
    let endInterval=9

    for(let i=0 ; i < sizeTicket ; i++){

        const columnOfTicket= generateMatrizNumbersForColumn(initInterval,endInterval)
        matiz.push(columnOfTicket)

        if(!i){
            initInterval=initInterval+9
            endInterval=endInterval+10
            continue
        }
        if(i === sizeTicket-2){
            initInterval=initInterval+10
            endInterval=endInterval+11
            continue
        }
        initInterval=initInterval+10
        endInterval=endInterval+10
    }

    return matiz
}
const generateTicketOfLottery=(sizeTicket:number):number[][]=>{
    const matrixOfTicket:number[][]=generateMatrixByTicket(sizeTicket)
    for( let row=0; row < 3; row++ ){
        let count=0
        while (count < 4) {
            let numberColRandom=randomNumberByInterval(matrixOfTicket.length-1,0)
            
            if(!matrixOfTicket[numberColRandom][row]){
                continue
            }

            matrixOfTicket[numberColRandom][row]=0
            count++
        }
    }
    return matrixOfTicket
}

// let fullTicket=generateMatrixByTicket(9)
// console.log("🚀 ~ file: index.ts ~ line 68 ~ fullTicket", fullTicket)
// let lotteryTicket=generateTicketOfLottery(9)
// console.log("🚀 ~ file: index.ts ~ line 70 ~ lotteryTicket", lotteryTicket)

// // console.log(generateMatrixByTicket(9))