const removeFromArray = function (array, ...elements) {
    const filteredArray = []
    array.forEach((item) => {
        if(!elements.includes(item)){
            filteredArray.push(item)
        }
    })
    return filteredArray
}

//to remove an item from an array
//go through each element of the array and check if it matches any of the parameters in the parameter array
//if it does not, push it into a new array

// Do not edit below this line
module.exports = removeFromArray;