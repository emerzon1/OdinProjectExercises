let findTheOldest = function(arr) {
    return arr.reduce((a, b) => {
        if(a.yearOfDeath==null){
            a.yearOfDeath = 2020;
        }
        if(b.yearOfDeath == null){
            b.yearOfDeath = 2020;
        }
        if((a.yearOfDeath-a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)){
            return a;
        }
        else{
            return b;
        }
    })
}

module.exports = findTheOldest
