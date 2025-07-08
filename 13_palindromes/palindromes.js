const palindromes = function (s) {
    let str = s.toLowerCase().split('').filter((letter) => letter.match(/[a-z0-9]/i));
    let j = str.length - 1;
    for(let i = 0; i < j; i++){
        if (str[i] != str[j]){
            return false;
        }
        j--;
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
