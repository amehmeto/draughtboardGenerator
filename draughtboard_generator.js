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

    static generateLines(height, width, draughtboard) {
        const EVEN_LINE = this.generateCells('even', width);
        const ODD_LINE = this.generateCells('odd', width);

        let LINE = (this.isProcessedLineEven(height)) ? EVEN_LINE : ODD_LINE;
        draughtboard.unshift(LINE);
    }

    static generateCells(lineOddity, width) {
        let cells = [];
        while (width)
            this.generateCell(lineOddity, width--, cells);
        return cells;
    }

    static generateCell(lineOddity, width, cells) {
        const CELL = this.populateAccordingToOddity(lineOddity, width);
        cells.push(CELL);
    }

    static populateAccordingToOddity(lineOddity, width) {
        if (lineOddity === 'even')
            return (width % 2 === 0) ? 'white' : 'black';
        else
            return !(width % 2 === 0) ? 'white' : 'black';
    }

    static hasLineToBeProcessed(height) {
        return height !== 0;
    }

    static isProcessedLineEven(height) {
        return height % 2 === 0;
    }
}

module.exports = Draughtboard;