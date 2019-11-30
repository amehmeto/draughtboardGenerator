class Draughtboard {
    static generator(height = 6) {
        const EVEN_LINE = ['white', 'black', 'white', 'black', 'white', 'black'];
        const ODD_LINE = ['black', 'white', 'black', 'white', 'black', 'white'];
        let LINE;
        let finalDraughtboard = [];

        while (height !== 0) {
            LINE = (this.isProcessedLineEven(height--)) ? EVEN_LINE : ODD_LINE;
            finalDraughtboard.unshift(LINE);
        }
        return finalDraughtboard;
    }

    static isProcessedLineEven(height) {
        return height % 2 === 0;
    }
}

module.exports = Draughtboard;