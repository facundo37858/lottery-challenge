"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTicketOfLottery = void 0;
const randomNumberByInterval = (numberMax, numberMin) => {
    return Math.round(Math.random() * (numberMax - numberMin) + numberMin);
};
const uniqueValueVerification = (arrOfNumbers, numberToVerify) => {
    return arrOfNumbers.includes(numberToVerify);
};
const generateMatrizNumbersForColumn = (initIntervalNum, endIntervalNum, arrNumbers = []) => {
    if (arrNumbers.length === 3) {
        return arrNumbers;
    }
    let ramdomNum = randomNumberByInterval(endIntervalNum, initIntervalNum);
    if (!uniqueValueVerification(arrNumbers, ramdomNum)) {
        return generateMatrizNumbersForColumn(initIntervalNum, endIntervalNum, [...arrNumbers, ramdomNum]);
    }
    return generateMatrizNumbersForColumn(initIntervalNum, endIntervalNum, arrNumbers);
};
const generateMatrixByTicket = (sizeTicket) => {
    let matiz = [];
    let initInterval = 1;
    let endInterval = 9;
    for (let i = 0; i < sizeTicket; i++) {
        const columnOfTicket = generateMatrizNumbersForColumn(initInterval, endInterval);
        matiz.push(columnOfTicket);
        if (!i) {
            initInterval = initInterval + 9;
            endInterval = endInterval + 10;
            continue;
        }
        if (i === sizeTicket - 2) {
            initInterval = initInterval + 10;
            endInterval = endInterval + 11;
            continue;
        }
        initInterval = initInterval + 10;
        endInterval = endInterval + 10;
    }
    matiz = matiz.map(e => e.sort((a, b) => a - b));
    return matiz;
};
const generateTicketOfLottery = (sizeTicket) => {
    let matrixOfTicket = generateMatrixByTicket(sizeTicket);
    let arrControl = [];
    for (let row = 0; row < 3; row++) {
        let count = 0;
        while (count < 4) {
            let numberColRandom = randomNumberByInterval(matrixOfTicket.length - 1, 0);
            arrControl = [...arrControl, numberColRandom];
            let filter = arrControl.filter(e => e === numberColRandom);
            // console.log("🚀 ~ file: index.ts ~ line 59 ~ generateTicketOfLottery ~ arrControl", arrControl)
            // console.log("🚀 ~ file: index.ts ~ line 62 ~ generateTicketOfLottery ~ filter", filter)
            // console.log("🚀 ~ file: index.ts ~ line 57 ~ generateTicketOfLottery ~ matrixOfTicket.length", matrixOfTicket.length)
            // console.log("🚀 ~ file: index.ts ~ line 57 ~ generateTicketOfLottery ~ numberColRandom", numberColRandom)
            if (!matrixOfTicket[numberColRandom][row] || filter.length > 2) {
                // console.log('ENTER')
                continue;
            }
            matrixOfTicket[numberColRandom][row] = 0;
            count++;
        }
        arrControl = [...arrControl, -1];
    }
    // matrixOfTicket=vericationOfLotteryTicket(sizeTicket)
    if (vericationOfLotteryTicket(matrixOfTicket)) {
        return matrixOfTicket;
    }
    return (0, exports.generateTicketOfLottery)(sizeTicket);
};
exports.generateTicketOfLottery = generateTicketOfLottery;
const vericationOfLotteryTicket = (matrixOfTicket) => {
    // const ticketLoettery=generateTicketOfLottery(sizeTicket)
    for (let element of matrixOfTicket) {
        if (!element.includes(0)) {
            return false;
        }
    }
    return true;
    // return ticketLoettery
};
const root = document.getElementById('root');
const numbersOfLotteryTicket = (0, exports.generateTicketOfLottery)(9);
const ticket = (numbersLottery) => {
    for (let col = 0; col < numbersLottery.length; col++) {
        let numberContainer = document.createElement('div');
        numberContainer.classList.add('container-column');
        root === null || root === void 0 ? void 0 : root.appendChild(numberContainer);
        for (let row = 0; row < numbersLottery[col].length; row++) {
            let number = document.createElement('div');
            number.textContent = !numbersLottery[col][row] ? '---' : `${numbersLottery[col][row]}`;
            number.classList.add('numbers');
            numberContainer.appendChild(number);
        }
    }
};
ticket(numbersOfLotteryTicket);
// let fullTicket=generateMatrixByTicket(9)
// console.log("🚀 ~ file: index.ts ~ line 68 ~ fullTicket", fullTicket)
// let lotteryTicket=generateTicketOfLottery(9)
// console.log("🚀 ~ file: index.ts ~ line 70 ~ lotteryTicket", lotteryTicket)
// // console.log(generateMatrixByTicket(9))
