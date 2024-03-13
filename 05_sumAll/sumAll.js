const sumAll = function(...numbers) {
    let sum = 0
    let ascendingNumbers = numbers.sort(function(a, b){return a - b})
    let i = ascendingNumbers[0]
    let y = ascendingNumbers[1]
    if(i < 0) {
        return 'ERROR'
    } else if (Number(i) !== i) {
        return 'ERROR'
    } else if (Number(y) !== y) {
        return 'ERROR'
    }
    while (i <= ascendingNumbers[1]) {
        sum += i
        i++
    }
    return sum
};




// Do not edit below this line
module.exports = sumAll;
