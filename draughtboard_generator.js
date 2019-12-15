const DEFAULT = 6;

class Draughtboard {
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.cellsLayout = this.generator(this.height, this.width);
    }
    generator(height, width) {
        let finalDraughtboard = [];

        const SIZE_PARAMETERS = this.initializeWithDefaultWhenNull(height, width);
        height = SIZE_PARAMETERS.height;
        width = SIZE_PARAMETERS.width;

        while (this.hasLineToBeProcessed(height))
            this.generateLines(height--, width, finalDraughtboard);
        return finalDraughtboard;
    }

    initializeWithDefaultWhenNull(height, width) {
        if (!height)
            height = DEFAULT;
        if (!width)
            width = DEFAULT;
        return {height, width};
    }

    generateLines(height, width, draughtboard) {
        let LINE = this.generateCells(height, width);
        draughtboard.unshift(LINE);
    }

    generateCells(height, width) {
        let cells = [];
        while (width)
            this.generateCell(height, width--, cells);
        return cells;
    }

    generateCell(height, width, cells) {
        const CELL = this.populateAccordingToOddity(height, width);
        cells.push(CELL);
    }

    populateAccordingToOddity(height, width) {
        return (this.isLineEven(height) === this.isColumnEven(width)) ?
             'white' : 'black';
    }

    hasLineToBeProcessed(height) {
        return height !== 0;
    }

    isLineEven(height) {
        return height % 2 === 0;
    }

    isColumnEven(width) {
        return width % 2 === 0;
    }

    display(black, white) {
        const CELLS_LAYOUT = this.cellsLayout;
        const DISPLAY_PARAMETERS = this.initializeDisplayParametersWhenNull(black, white);
        black = DISPLAY_PARAMETERS.black;
        white = DISPLAY_PARAMETERS.white;
        const DRESSED_CELLS = CELLS_LAYOUT.map(this.dressCellsLineByLine(black, white));
        return this.accumulateLines(DRESSED_CELLS);
    }

    initializeDisplayParametersWhenNull(black, white) {
        if (!black)
            black = 'x';
        if (!white)
            white = 'o';
        return {black, white};
    }

    dressCellsLineByLine(black, white) {
        return (line) => line.map(this.dressCells(black, white));
    }

    dressCells(black, white) {
        return (cell) => (cell === 'black') ? '[' + black + ']' : '[' + white + ']';
    }

    accumulateLines(dressedCells) {
        let dressedLines = '';

        for (let line of dressedCells)
            dressedLines = this.accumulateCells(line, dressedLines) + "\n";
        return dressedLines.substring(0, dressedLines.length - 1);
    }

    accumulateCells(line, dressedLines) {
        for (let cell of line)
            dressedLines += cell;
        return  dressedLines;
    }
}

module.exports = Draughtboard;