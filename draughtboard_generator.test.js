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
	const GENERATED_DRAUGHTBOARD = Draughtboard.generator();
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
	const GENERATED_DRAUGHTBOARD = Draughtboard.generator(HEIGHT);
	// Assert
    expect(GENERATED_DRAUGHTBOARD).toStrictEqual(EXPECTED_DRAUGHTBOARD);
});

it('should generate two lines draughtboard', () => {
	// Arrange
	const EXPECTED_DRAUGHTBOARD =
		[
			['black','white','black','white','black','white'],
			['white','black','white','black','white','black'],
		];
	const HEIGHT = 2;
	// Act
	const GENERATED_DRAUGHTBOARD = Draughtboard.generator(HEIGHT);
	// Assert
	expect(GENERATED_DRAUGHTBOARD).toStrictEqual(EXPECTED_DRAUGHTBOARD);
});
