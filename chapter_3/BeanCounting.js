console.log(countBs('gfhBgjhgBkj'));
console.log(countChar('gfhBgjhgBkjg', 'g'));

function countBs(str, char) {
    const l = str.length;
    let count = 0;

    for (let i = 0; i< l;i++){
        if (str[i] === 'B') {
            count++;
        }
    }
    return count;
}

function countChar(str, char) {
    const l = str.length;
    let count = 0;

    for (let i = 0; i< l;i++){
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
