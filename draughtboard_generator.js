const DEFAULT = 6;

class Draughtboard {
    static generator(height, width) {
        let finalDraughtboard = [];

        if (height === null)
            height = DEFAULT;
        if (width === null)
            width = DEFAULT;
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