describe('Math', function() {
    describe('success tests', function () {
        it('Math.pow() test', function() {
            expect(Math.pow(2, 3)).toBe(8);
        });

        it('Math.sin() test', function() {
            expect(Math.sin(0)).toBe(0);
            expect(Math.sin(Math.PI/2)).toBe(1);
        });
    });

    it('Math.noMethod() test', function() {
        allure.severity(allure.severity.MINOR);
        allure.label('feature', 'try');
        allure.label('story', 'little story');
        allure.description('This test will be broken');
        Math.noMethod(2);
    });

    it('Math.cos() test', function() {
        allure.description('This test has wrong assertions and will be failed');
        expect(Math.cos(0)).toBe(0);
        expect(Math.cos(Math.PI)).toBe(0);
    });

    xit('non-implemented test', function() {

    });
});
