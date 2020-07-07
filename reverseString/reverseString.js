const reverseString = function(s) {
    let res = ""
    for(let i = s.length-1; i >= 0; i --){
        res += s.charAt(i);
    }
    return res;
}

module.exports = reverseString
