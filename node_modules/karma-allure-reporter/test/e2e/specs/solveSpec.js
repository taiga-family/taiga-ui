describe('Square equation', function() {

    var discriminant = allure.createStep('get the discriminant', function(a, b, c) {
            return b*b - 4*a*c;
        }),
        getRoot = allure.createStep('getRoot', function(a, b, c, d, sign) {
            return (-b+sign*Math.sqrt(d))/(2*a);
        });

    it('with one root', function() {
        var a = 1, b = 2, c = 1,
            d = discriminant(a, b, c),
            root = -b/2;
        expect(d).toBe(0);
        expect(root).toBe(-1)
    });

    it('with two roots', function() {
        //steps can be created in any moment
        var getRoots = allure.createStep('getRoots', function(a, b, c, d) {
            d = discriminant(a, b, c);
            return {
                x1: getRoot(a, b, c, d, -1),
                x2: getRoot(a, b, c, d, 1),
                d: d
            };
        });
        var a = 1, b = 5, c = 4,
            roots = getRoots(a, b, c);
        expect(roots.d > 0).toBeTruthy();
        expect(roots.x1).toBe(-4);
        expect(roots.x2).toBe(-1)
    });

    it('without roots', function() {
        var a = 1, b = 1, c = 4,
            d = discriminant(a, b, c),
            x1 = getRoot(a, b, c, d, -1),
            x2 = getRoot(a, b, c, d, 1);
        expect(d > 0).toBeFalsy();
        expect(x1).toBeNaN();
        expect(x2).toBeNaN()
    })
});
