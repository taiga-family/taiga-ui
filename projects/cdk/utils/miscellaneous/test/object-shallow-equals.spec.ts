import {tuiObjectShallowEquals} from '@taiga-ui/cdk';

describe('tuiObjectShallowEquals', () => {
    it('objects are equal', () => {
        expect(tuiObjectShallowEquals({a: 1, b: 2}, {a: 1, b: 2})).toBeTruthy();
    });

    it('objects are not equal (different values)', () => {
        expect(tuiObjectShallowEquals({a: 1, b: 2}, {a: 1, b: 3})).toBeFalsy();
    });

    it('objects are not equal (different keys)', () => {
        expect(tuiObjectShallowEquals({a: 1, b: 2}, {a: 1, c: 2})).toBeFalsy();
    });

    it('different sizes are not equal', () => {
        expect(tuiObjectShallowEquals({a: 1, b: 2}, {a: 1})).toBeFalsy();
        expect(tuiObjectShallowEquals({a: 1}, {a: 1, b: 2})).toBeFalsy();
    });

    it('nested objects are not equal (shallow check)', () => {
        const nested = {nested: {value: 'test'}};

        expect(tuiObjectShallowEquals(nested, {nested: {value: 'test'}})).toBeFalsy();
    });

    it('same reference is equal', () => {
        const obj = {a: 1, b: 2};

        expect(tuiObjectShallowEquals(obj, obj)).toBeTruthy();
    });
});
