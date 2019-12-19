printChess(1);
printChess(2);
printChess(5);

function printChess(size = 8) {
    let str = '', length = size * size;

    let shift = 0;
    let odd = (size + 1) % 2;

    for (let i = 0; i < length; i++) {
        str += ((i + shift) % 2 ? '■' : '□');
        if ((i + 1) % size === 0) {
            str += '\n';
            shift = (shift + odd) % 2;
        }
    }

    console.log(str);
}
