const fibonacci = function(a) {
    a = parseInt(a);
    if(a<0){
        return "OOPS";
    }
    if(a<=2){
        return 1;
    }
    let prev = 1;
    let curr = 1;
    for(let i = 2; i < a; i ++){
        var temp = curr;
        curr += prev;
        prev = temp;
    }
    return curr;
}

module.exports = fibonacci
