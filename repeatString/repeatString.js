const repeatString = (str, num) => {
    if(num<0)return "ERROR";
    let res = "";
    for(let i = 0; i < num ; i ++){
        res += str;
    }
    return res;
}

module.exports = repeatString
