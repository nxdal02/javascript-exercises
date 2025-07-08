const fibonacci = function(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else if  (n < 0) {
        return "OOPS";
    }
    let prev = 0;
    let cur = 1;
    for (let i = 2; i <= n; i++) {
        [cur, prev] = [cur + prev, cur];
    }
    return cur;
};

// Do not edit below this line
module.exports = fibonacci;
