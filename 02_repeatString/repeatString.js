const repeatString = function(string, n) {
    let strings = ''
    let i = 0
    while(i < n) {
        strings += string
        i++
    }
    while (i > n) {
        strings += 'ERROR'; 
        break
    }
    
    
    return(strings)
    //need the function to repeat a string for a specified number of times 
    //need a value to store the string, because I need to add the repeated string to it 
    //need a loop function that will iterate until I get to n 
};

repeatString('hey', 10)


// Do not edit below this line
module.exports = repeatString;
