class Draughtboard {
    static generator() {
        const STANDARD_DRAUGHTBOARD = "[x][o][x][o][x][o]\n" +
            "[o][x][o][x][o][x]\n" +
            "[x][o][x][o][x][o]\n" +
            "[o][x][o][x][o][x]\n" +
            "[x][o][x][o][x][o]\n" +
            "[o][x][o][x][o][x]\n";

        return STANDARD_DRAUGHTBOARD;
    }
}

module.exports = Draughtboard;