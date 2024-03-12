const reverseString = function(string) {
    let stringElements = []
    for (i = 0; i < string.length; i++) {
       stringElements[i] = string.charAt(i)
    } 
    let reversedStringElements = stringElements.reverse()
    let reversedString = reversedStringElements.join('')
    
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
