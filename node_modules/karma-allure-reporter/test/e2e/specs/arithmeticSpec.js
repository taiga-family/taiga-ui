describe('Arithmetic', function() {
    it('base addiction test', function() {
        allure.severity(allure.severity.BLOCKER);
        expect(2+2).toBe(4)
    });

    it('base multiplication test', function() {
        allure.severity(allure.severity.CRITICAL);
        expect(2*2).toBe(4)
    });

    it('division test', function() {
        allure.description('This test has wrong assertions and will be failed');
        expect(isNaN(0/0)).toBe(false);
    });

    it('rounding test', function() {
        allure.severity(allure.severity.NORMAL);
        allure.description('It\'s a round to nearest: result is the integer that is closest to value');
        expect(Math.round(2.6)).toBe(3);
        expect(Math.round(2.5)).toBe(3);
        expect(Math.round(2.3)).toBe(2);
    });
});
