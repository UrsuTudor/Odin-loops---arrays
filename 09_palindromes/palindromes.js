const palindromes = function (string) {
    const arryedString = Array.from(string);
    const lettersInString = arryedString.filter((character) => (character >='a' && character <= 'z') || 
                                                                (character >='A' && character <= 'Z') || 
                                                                (character >= 0 || character <= 0));
    
    let removedSpaces = lettersInString.filter((character) => character !== ' ')
    let removedSpacesReversed = removedSpaces.toReversed()

    removedSpaces = removedSpaces.join('').toLowerCase()
    removedSpacesReversed = removedSpacesReversed.join('').toLowerCase()
    
    if (removedSpaces === removedSpacesReversed) {
        return true
    } else {return false}
    
};


// Do not edit below this line
module.exports = palindromes;
