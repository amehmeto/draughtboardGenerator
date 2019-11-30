
describe('Checking everything works', () => {
	it('should do nothing but run', () => {
		expect(true).toBeTruthy();
	});
});

it('should generate standard draughtboard', function () {
	const EXPECTED_DRAUGHTBOARD =
		"[x][o][x][o][x][o]\n" +
		"[o][x][o][x][o][x]\n" +
		"[x][o][x][o][x][o]\n" +
		"[o][x][o][x][o][x]\n" +
		"[x][o][x][o][x][o]\n" +
		"[o][x][o][x][o][x]\n";
	const GENERATED_DRAUGHTBOARD = draughtboardGenerator();
	expect(GENERATED_DRAUGHTBOARD).toBe(EXPECTED_DRAUGHTBOARD);
});
