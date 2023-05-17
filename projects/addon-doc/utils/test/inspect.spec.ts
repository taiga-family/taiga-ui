import {tuiInspectAny} from '@taiga-ui/addon-doc';

describe(`tuiInspectAny`, () => {
    describe(`array`, () => {
        it(`should return correct string representation of array`, () => {
            const array = [1, `two`, {three: true}];
            const depth = 2;
            const expectedResult = `[1, 'two', {three: true}]`;

            expect(tuiInspectAny(array, depth)).toEqual(expectedResult);
        });

        it(`should return ellipsis when depth is 0`, () => {
            const array = [1, `two`, {three: true}];
            const depth = 0;
            const expectedResult = `[…]`;

            expect(tuiInspectAny(array, depth)).toEqual(expectedResult);
        });

        it(`should handle empty arrays`, () => {
            const array: unknown[] = [];
            const depth = 1;
            const expectedResult = `[]`;

            expect(tuiInspectAny(array, depth)).toEqual(expectedResult);
        });
    });

    describe(`object`, () => {
        it(`returns an empty object string when depth is zero`, () => {
            const object = {foo: `bar`, baz: 42};
            const depth = 0;

            expect(tuiInspectAny(object, depth)).toBe(`{…}`);
        });

        it(`returns a string representation of an object with nested values`, () => {
            const object = {foo: {bar: `baz`}, qux: [1, 2, 3]};
            const depth = 2;

            expect(tuiInspectAny(object, depth)).toBe(
                `{foo: {bar: 'baz'}, qux: [1, 2, 3]}`,
            );
        });
    });
});
