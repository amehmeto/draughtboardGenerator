const Draughtboard = require('./draughtboard_generator');

if (process.argv.length >= 2) {
    let height;
    for (let j = 0; j < process.argv.length; j++) {
        console.log(j + ' -> ' + (process.argv[j]));
        if (process.argv[j][0] === '-' && process.argv[j][1] === '-')

    }

    const BOARD = new Draughtboard(height, null);
    console.log(BOARD.display());
}
