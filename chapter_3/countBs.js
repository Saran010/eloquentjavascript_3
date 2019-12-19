console.log(countBs('gfhBgjhgBkj'));

function countBs(str) {
    const l = str.length;
    let count = 0;

    for (let i = 0; i< l;i++){
        if (str[i] === 'B') {
            count++;
        }
    }
    return count;
}
