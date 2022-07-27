import {coerceValue} from '@taiga-ui/addon-doc';

describe(`coercing values`, () => {
    it(`string -> string`, () => {
        expect(coerceValue(` +7965`)).toBe(`+7965`);
        expect(coerceValue(`%2B7`)).toBe(`+7`);
        expect(coerceValue(`%20%20%20123%20%20`)).toBe(`   123  `);
        expect(coerceValue(`Hello world`)).toBe(`Hello world`);
        expect(coerceValue(`2+5`)).toBe(`2+5`);
        expect(coerceValue(``)).toBe(``);
    });

    it(`string -> number`, () => {
        expect(coerceValue(`123`)).toBe(123);
        expect(coerceValue(`-123`)).toBe(-123);
    });

    it(`string -> boolean`, () => {
        expect(coerceValue(`true`)).toBe(true);
        expect(coerceValue(`false`)).toBe(false);
    });

    it(`string -> null`, () => {
        expect(coerceValue(`null`)).toBe(null);
        expect(coerceValue(`undefined`)).toBe(null);
        expect(coerceValue(`NaN`)).toBe(null);
        expect(coerceValue(`Infinity`)).toBe(null);
    });

    it(`string -> array`, () => {
        expect(coerceValue(`[1,2,3]`)).toEqual([1, 2, 3]);
        expect(coerceValue(`[ 1,2, 3]`)).toEqual([1, 2, 3]);
        expect(coerceValue(`[ 1,2,, 3]`)).toBe(`[ 1,2,, 3]`);
        expect(coerceValue(`This is array [1,2,3] inside string`)).toBe(
            `This is array [1,2,3] inside string`,
        );
    });

    it(`string -> object`, () => {
        expect(coerceValue(`{"id": 1, "name": "Taiga"}`)).toEqual({id: 1, name: `Taiga`});
        expect(coerceValue(`{"id": 1, "options": [1,2,3]}`)).toEqual({
            id: 1,
            options: [1, 2, 3],
        });
        expect(coerceValue(`{"message": "Extra comma", "options": [1,2,,3]}`)).toBe(
            `{"message": "Extra comma", "options": [1,2,,3]}`,
        );
        expect(coerceValue(`{"message": "No } at the end"`)).toBe(
            `{"message": "No } at the end"`,
        );
        expect(coerceValue(`{message: "No quotes for key"`)).toBe(
            `{message: "No quotes for key"`,
        );
    });
});
