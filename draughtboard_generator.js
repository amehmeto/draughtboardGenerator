const DEFAULT = 6;

class Draughtboard {
    static generator(height, width) {
        let finalDraughtboard = [];

        const parameters = this.initializeWithDefaultWhenNull(height, width);
        height = parameters.height;
        width = parameters.width;

        while (this.hasLineToBeProcessed(height))
            this.generateLines(height--, width, finalDraughtboard);
        return finalDraughtboard;
    }

    static initializeWithDefaultWhenNull(height, width) {
        if (height === null)
            height = DEFAULT;
        if (width === null)
            width = DEFAULT;
        return {height, width};
    }

    static generateLines(height, width, finalDraughtboard) {
        const EVEN_LINE = this.generateCells('even', width);
        const ODD_LINE = this.generateCells('odd', width);

        let LINE = (this.isProcessedLineEven(height)) ? EVEN_LINE : ODD_LINE;
        finalDraughtboard.unshift(LINE);
    }

    static generateCells(oddity, width) {
        let cells = [];
        while (width) {
            let CELL;
            if (oddity === 'even')
                CELL = (width-- % 2 === 0) ? 'white' : 'black';
            else
                CELL = !(width-- % 2 === 0) ? 'white' : 'black';
            cells.push(CELL);
        }
        return cells;
    }

    static hasLineToBeProcessed(height) {
        return height !== 0;
    }

    static isProcessedLineEven(height) {
        return height % 2 === 0;
    }
}

module.exports = Draughtboard;