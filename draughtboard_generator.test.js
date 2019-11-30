const Draughtboard = require('./draughtboard_generator');

describe('Checking everything works', () => {
	it('should do nothing but run', () => {
		expect(true).toBeTruthy();
	});
});

it('should generate standard draughtboard', function () {
	const EXPECTED_DRAUGHTBOARD =
		[
			['black','white','black','white','black','white'],
			['white','black','white','black','white','black'],
			['black','white','black','white','black','white'],
			['white','black','white','black','white','black'],
			['black','white','black','white','black','white'],
			['white','black','white','black','white','black'],
		];
	const GENERATED_DRAUGHTBOARD = Draughtboard.generator();
	expect(GENERATED_DRAUGHTBOARD).toStrictEqual(EXPECTED_DRAUGHTBOARD);
});
