const caesar = function(str, num) {
    let res = "";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i < str.length; i ++){
        if(!((str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 91) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122))){
            res += str[i];
        }
        else if(str[i] == str[i].toLowerCase()){
            res += lower[Math.abs((str.charCodeAt(i) - 97) + num + 2600) %26];
        }
        else{
            res+= upper[Math.abs((str.charCodeAt(i) - 65) + num + 2600)%26];
        }
    }

    return res;
}

module.exports = caesar
