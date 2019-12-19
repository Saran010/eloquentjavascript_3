console.log(isEven(5));
console.log(isEven(4));
console.log(isEven(0));
console.log(isEven(-1));
console.log(isEven(-5));
console.log(isEven(-100));
console.log(isEven(50));
console.log(isEven(75));

function isEven(a) {
    if (a < 0) return isEven(-a);
    if (a === 0) return true;
    if (a === 1) return false;
    return isEven(a - 2);
}
