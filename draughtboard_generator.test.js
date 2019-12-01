const Draughtboard = require('./draughtboard_generator');
const shellExec = require("shell-exec");

describe('Checking everything works', () => {
	it('should do nothing but run', () => {
		expect(true).toBeTruthy();
	});
});

describe('Draughtboard generation business logic', () => {
	it('should generate standard draughtboard', () => {
		// Arrange
		const EXPECTED_DRAUGHTBOARD =
			[
				['black','white','black','white','black','white'],
				['white','black','white','black','white','black'],
				['black','white','black','white','black','white'],
				['white','black','white','black','white','black'],
				['black','white','black','white','black','white'],
				['white','black','white','black','white','black'],
			];
		// Act
		const GENERATED_DRAUGHTBOARD = new Draughtboard(null, null);
		// Assert
		expect(GENERATED_DRAUGHTBOARD.cellsLayout).toStrictEqual(EXPECTED_DRAUGHTBOARD);
	});

	it('should generate one line draughtboard', () => {
		// Arrange
		const EXPECTED_DRAUGHTBOARD =
			[
				['black','white','black','white','black','white']
			];
		const HEIGHT = 1;
		// Act
		const GENERATED_DRAUGHTBOARD = new Draughtboard(HEIGHT, null);
		// Assert
		expect(GENERATED_DRAUGHTBOARD.cellsLayout).toStrictEqual(EXPECTED_DRAUGHTBOARD);
	});

	it('should generate two lines draughtboard and default width', () => {
		// Arrange
		const EXPECTED_DRAUGHTBOARD =
			[
				['black','white','black','white','black','white'],
				['white','black','white','black','white','black'],
			];
		const HEIGHT = 2;
		// Act
		const GENERATED_DRAUGHTBOARD = new Draughtboard(HEIGHT, null);
		// Assert
		expect(GENERATED_DRAUGHTBOARD.cellsLayout).toStrictEqual(EXPECTED_DRAUGHTBOARD);
	});

	it('should generate seven lines draughtboard and default width', () => {
		// Arrange
		const EXPECTED_DRAUGHTBOARD =
			[
				['black','white','black','white','black','white'],
				['white','black','white','black','white','black'],
				['black','white','black','white','black','white'],
				['white','black','white','black','white','black'],
				['black','white','black','white','black','white'],
				['white','black','white','black','white','black'],
				['black','white','black','white','black','white'],
			];
		const HEIGHT = 7;
		// Act
		const GENERATED_DRAUGHTBOARD = new Draughtboard(HEIGHT, null);
		// Assert
		expect(GENERATED_DRAUGHTBOARD.cellsLayout).toStrictEqual(EXPECTED_DRAUGHTBOARD);
	});

	it('should generate four cells width and default lines', () => {
		// Arrange
		const EXPECTED_DRAUGHTBOARD =
			[
				['black','white','black','white'],
				['white','black','white','black'],
				['black','white','black','white'],
				['white','black','white','black'],
				['black','white','black','white'],
				['white','black','white','black'],
			];
		const WIDTH = 4;
		// Act
		const GENERATED_DRAUGHTBOARD = new Draughtboard(null, WIDTH);
		// Assert
		expect(GENERATED_DRAUGHTBOARD.cellsLayout).toStrictEqual(EXPECTED_DRAUGHTBOARD);
	});

	it('should generate two cells width and default lines', () => {
		// Arrange
		const EXPECTED_DRAUGHTBOARD =
			[
				['black','white'],
				['white','black'],
				['black','white'],
				['white','black'],
				['black','white'],
				['white','black'],
			];
		const WIDTH = 2;
		// Act
		const GENERATED_DRAUGHTBOARD = new Draughtboard(null, WIDTH);
		// Assert
		expect(GENERATED_DRAUGHTBOARD.cellsLayout).toStrictEqual(EXPECTED_DRAUGHTBOARD);
	});
});

describe('Draughtboard displaying', () => {
	it('should display black as [x] and white as [o] by default', () => {
		//Arrange
		const DEFAULT_DRAUGHTBOARD = new Draughtboard(null, null);
		const EXPECTED_DISPLAY =
			"[x][o][x][o][x][o]\n" +
			"[o][x][o][x][o][x]\n" +
			"[x][o][x][o][x][o]\n" +
			"[o][x][o][x][o][x]\n" +
			"[x][o][x][o][x][o]\n" +
			"[o][x][o][x][o][x]";
		// Act
		const GENERATED_DISPLAY = DEFAULT_DRAUGHTBOARD.display(null, null);
		// Assert
		expect(GENERATED_DISPLAY).toStrictEqual(EXPECTED_DISPLAY);
	});

	it('should display white as [-] when white parameter is -', () => {
		//Arrange
		const DEFAULT_DRAUGHTBOARD = new Draughtboard(null, null);
		const EXPECTED_DISPLAY =
			"[x][-][x][-][x][-]\n" +
			"[-][x][-][x][-][x]\n" +
			"[x][-][x][-][x][-]\n" +
			"[-][x][-][x][-][x]\n" +
			"[x][-][x][-][x][-]\n" +
			"[-][x][-][x][-][x]";
		// Act
		const GENERATED_DISPLAY = DEFAULT_DRAUGHTBOARD.display(null, '-');
		// Assert
		expect(GENERATED_DISPLAY).toStrictEqual(EXPECTED_DISPLAY);
	});

	it('should display white as [w] and black as [b] when parameter are w and b', () => {
		//Arrange
		const DEFAULT_DRAUGHTBOARD = new Draughtboard(null, null);
		const EXPECTED_DISPLAY =
			"[b][w][b][w][b][w]\n" +
			"[w][b][w][b][w][b]\n" +
			"[b][w][b][w][b][w]\n" +
			"[w][b][w][b][w][b]\n" +
			"[b][w][b][w][b][w]\n" +
			"[w][b][w][b][w][b]";
		// Act
		const GENERATED_DISPLAY = DEFAULT_DRAUGHTBOARD.display('b', 'w');
		// Assert
		expect(GENERATED_DISPLAY).toStrictEqual(EXPECTED_DISPLAY);
	});
});

describe('Draughtboard generator CLI', () => {
	it('should display default board', ()  => {
		return shellExec('node checkerboard-generator').
			then((stdout) => {
			expect(stdout.stdout).toBe(
					"[x][o][x][o][x][o]\n" +
					"[o][x][o][x][o][x]\n" +
					"[x][o][x][o][x][o]\n" +
					"[o][x][o][x][o][x]\n" +
					"[x][o][x][o][x][o]\n" +
					"[o][x][o][x][o][x]\n"
			);
		})
	});

	it('should display 1 line default board with --height=1 parameter', ()  => {
		return shellExec('node checkerboard-generator').
		then((stdout) => {
			expect(stdout.stdout).toBe(
				"[x][o][x][o][x][o]"
			);
		})
	});
});