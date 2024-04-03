

const fibonacci = function(number) {
    function getFibonacciSequence(numberOfElements) {
        numberOfElements = number;
        let n1 = 0;
        let n2 = 1;
        let nextTerm;
        let fibonacciSequence = [1];
        for (i = 1; i < numberOfElements; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
            fibonacciSequence[i] = nextTerm;
        }
        return fibonacciSequence;
    }
    
    let fibonacciSequence = [];
    fibonacciArray = getFibonacciSequence(number);
    console.log(typeof fibonacciArray);

    if (parseInt(number) === 0) {return 0};
    if (number < 0) {return 'OOPS'};
    return fibonacciArray[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
