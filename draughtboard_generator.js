const DEFAULT = 6;

class Draughtboard {
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.cellsLayout = this.generator(this.height, this.width);
    }

    generator(_height, _width) {
        let finalDraughtboard = [];
        let { height, width } = { height: _height || DEFAULT, width: _width || DEFAULT };

        while (this.hasLineToBeProcessed(height))
            this.generateLines(height--, width, finalDraughtboard);
        return finalDraughtboard;
    }

    generateLines(height, width, draughtboard) {
        let line = this.generateCells(height, width);
        draughtboard.unshift(line);
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
