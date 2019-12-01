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

    display(black, white) {
        const CELLS_LAYOUT = this.cellsLayout;

        if (!black)
            black = 'x';
        if (!white)
            white = 'o';
        const DRESSED_CELLS = CELLS_LAYOUT.map(this.dressCellsLineByLine(black, white));
        return this.accumulateLines(DRESSED_CELLS);
    }

    dressCellsLineByLine(black, white) {
        return (line) => line.map(this.dressCells(black, white));
    }

    dressCells(black, white) {
        return (cell) => (cell === 'black') ? '[' + black + ']' : '[' + white + ']';
    }

    accumulateLines(DRESSED_CELLS) {
        let dressedLines = '';

        for (let line of DRESSED_CELLS)
            dressedLines = this.accumulateCells(line, dressedLines) + "\n";
        return dressedLines;
    }

    accumulateCells(line, dressedLines) {
        for (let cell of line)
            dressedLines += cell;
        return  dressedLines;
    }
}

module.exports = Draughtboard;