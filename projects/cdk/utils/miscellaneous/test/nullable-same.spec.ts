import {nullableSame} from '../nullable-same';

describe(`nullableSame`, () => {
    interface Test {
        readonly id: number;
    }

    function testMather(a: Test, b: Test): boolean {
        return a.id === b.id;
    }

    const value1: Test = {id: 1};
    const value2: Test = {id: 2};

    describe(`returns true if`, () => {
        it(`a = null, b = null`, () => {
            expect(nullableSame(null, null, testMather)).toBe(true);
        });

        it(`a = {id: 1}, b = {id: 1}`, () => {
            expect(nullableSame(value1, value1, testMather)).toBe(true);
        });
    });

    describe(`returns false if`, () => {
        it(`a = {id: 1}, b = null`, () => {
            expect(nullableSame(value1, null, testMather)).toBe(false);
        });

        it(`a = null, b = {id: 1}`, () => {
            expect(nullableSame(null, value1, testMather)).toBe(false);
        });

        it(`a = {id: 1}, b = {id: 2}`, () => {
            expect(nullableSame(value1, value2, testMather)).toBe(false);
        });
    });
});
