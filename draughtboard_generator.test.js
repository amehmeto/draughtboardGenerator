const Draughtboard = require('./draughtboard_generator');

describe('Checking everything works', () => {
	it('should do nothing but run', () => {
		expect(true).toBeTruthy();
	});
});

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
	const GENERATED_DRAUGHTBOARD = Draughtboard.generator(null, null);
	// Assert
	expect(GENERATED_DRAUGHTBOARD).toStrictEqual(EXPECTED_DRAUGHTBOARD);
});

it('should generate one line draughtboard', () => {
	// Arrange
	const EXPECTED_DRAUGHTBOARD =
		[
			['black','white','black','white','black','white']
		];
	const HEIGHT = 1;
	// Act
	const GENERATED_DRAUGHTBOARD = Draughtboard.generator(HEIGHT, null);
	// Assert
    expect(GENERATED_DRAUGHTBOARD).toStrictEqual(EXPECTED_DRAUGHTBOARD);
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
	const GENERATED_DRAUGHTBOARD = Draughtboard.generator(HEIGHT, null);
	// Assert
	expect(GENERATED_DRAUGHTBOARD).toStrictEqual(EXPECTED_DRAUGHTBOARD);
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
	const GENERATED_DRAUGHTBOARD = Draughtboard.generator(HEIGHT, null);
	// Assert
	expect(GENERATED_DRAUGHTBOARD).toStrictEqual(EXPECTED_DRAUGHTBOARD);
});

it('should generate four cell width and default lines', () => {
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
	const GENERATED_DRAUGHTBOARD = Draughtboard.generator(null, WIDTH);
	// Assert
	expect(GENERATED_DRAUGHTBOARD).toStrictEqual(EXPECTED_DRAUGHTBOARD);
});