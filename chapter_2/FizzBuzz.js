const n = 100;

for (let i = 0; i <= n; i++) {
    let str = '';
    if (i % 3 === 0) {
        str += 'Fizz';
    }
    if (i % 5 === 0) {
        str += 'Buzz';
    }

    if (str) {
        console.log(i, ' ', str);
    }
}
