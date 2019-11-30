const DEFAULT_HEIGHT = 6;

class Draughtboard {
    static generator(height = DEFAULT_HEIGHT) {
        let finalDraughtboard = [];

        while (this.hasLineToBeProcessed(height))
            this.generateLine(height--, finalDraughtboard);
        return finalDraughtboard;
    }

    static generateLine(height, finalDraughtboard) {
        const EVEN_LINE = ['white', 'black', 'white', 'black', 'white', 'black'];
        const ODD_LINE = ['black', 'white', 'black', 'white', 'black', 'white'];

        let LINE = (this.isProcessedLineEven(height)) ? EVEN_LINE : ODD_LINE;
        finalDraughtboard.unshift(LINE);
    }

    static hasLineToBeProcessed(height) {
        return height !== 0;
    }

    static isProcessedLineEven(height) {
        return height % 2 === 0;
    }
}

module.exports = Draughtboard;