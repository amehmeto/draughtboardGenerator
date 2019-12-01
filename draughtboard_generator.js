const DEFAULT = 6;

class Draughtboard {
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.cellsLayout = this.generator(this.height, this.width);
    }
    generator(height, width) {
        let finalDraughtboard = [];

        const parameters = this.initializeWithDefaultWhenNull(height, width);
        height = parameters.height;
        width = parameters.width;

        while (this.hasLineToBeProcessed(height))
            this.generateLines(height--, width, finalDraughtboard);
        return finalDraughtboard;
    }

    initializeWithDefaultWhenNull(height, width) {
        if (height === null)
            height = DEFAULT;
        if (width === null)
            width = DEFAULT;
        return {height, width};
    }

    generateLines(height, width, draughtboard) {
        const EVEN_LINE = this.generateCells('even', width);
        const ODD_LINE = this.generateCells('odd', width);

        let LINE = (this.isProcessedLineEven(height)) ? EVEN_LINE : ODD_LINE;
        draughtboard.unshift(LINE);
    }

    generateCells(lineOddity, width) {
        let cells = [];
        while (width)
            this.generateCell(lineOddity, width--, cells);
        return cells;
    }

    generateCell(lineOddity, width, cells) {
        const CELL = this.populateAccordingToOddity(lineOddity, width);
        cells.push(CELL);
    }

    populateAccordingToOddity(lineOddity, width) {
        if (lineOddity === 'even')
            return (width % 2 === 0) ? 'white' : 'black';
        else
            return !(width % 2 === 0) ? 'white' : 'black';
    }

    hasLineToBeProcessed(height) {
        return height !== 0;
    }

    isProcessedLineEven(height) {
        return height % 2 === 0;
    }

    display() {
        const CELLS_LAYOUT = this.cellsLayout;
        return CELLS_LAYOUT.map((cell) => {
            if (cell === 'black')
                cell = '[x]';
            if (cell === 'white')
                cell = '[o]';
        });
    }
}

module.exports = Draughtboard;