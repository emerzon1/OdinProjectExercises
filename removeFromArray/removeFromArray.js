const removeFromArray = function(arr, ...args) {
    let i;
    for(i of args){
        for(let j = 0; j < arr.length; j ++){
            if(arr[j] === i){
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

module.exports = removeFromArray
