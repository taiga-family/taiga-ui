import {tuiCoerceValue} from '@taiga-ui/addon-doc';

describe(`coercing values`, () => {
    it(`string -> string`, () => {
        expect(tuiCoerceValue(` +7965`)).toBe(`+7965`);
        expect(tuiCoerceValue(`%2B7`)).toBe(`+7`);
        expect(tuiCoerceValue(`%20%20%20123%20%20`)).toBe(`   123  `);
        expect(tuiCoerceValue(`Hello world`)).toBe(`Hello world`);
        expect(tuiCoerceValue(`2+5`)).toBe(`2+5`);
        expect(tuiCoerceValue(``)).toBe(``);
        expect(tuiCoerceValue(`    `)).toBe(``);
    });

    it(`string -> number`, () => {
        expect(tuiCoerceValue(`123`)).toBe(123);
        expect(tuiCoerceValue(`-123`)).toBe(-123);
        expect(tuiCoerceValue(`.2`)).toBe(0.2);
        expect(tuiCoerceValue(`-.2`)).toBe(-0.2);
        expect(tuiCoerceValue(`2e5`)).toBe(200000);

        expect(tuiCoerceValue(`.`)).not.toBeInstanceOf(Number);
        expect(tuiCoerceValue(`1,2`)).not.toBeInstanceOf(Number);
        expect(tuiCoerceValue(`abc`)).not.toBeInstanceOf(Number);
        expect(tuiCoerceValue(`1+2`)).not.toBeInstanceOf(Number);
        expect(tuiCoerceValue(`   123   `)).not.toBeInstanceOf(Number);

        expect(tuiCoerceValue(`Infinity`)).toBe(Infinity);
    });

    it(`string -> boolean`, () => {
        expect(tuiCoerceValue(`true`)).toBe(true);
        expect(tuiCoerceValue(`false`)).toBe(false);
    });

    it(`string -> null`, () => {
        expect(tuiCoerceValue(`null`)).toBe(null);
        expect(tuiCoerceValue(`undefined`)).toBe(null);
        expect(tuiCoerceValue(`NaN`)).toBe(null);
    });

    it(`string -> array`, () => {
        expect(tuiCoerceValue(`[1,2,3]`)).toEqual([1, 2, 3]);
        expect(tuiCoerceValue(`[ 1,2, 3]`)).toEqual([1, 2, 3]);
        expect(tuiCoerceValue(`[ 1,2,, 3]`)).toBe(`[ 1,2,, 3]`);
        expect(tuiCoerceValue(`This is array [1,2,3] inside string`)).toBe(
            `This is array [1,2,3] inside string`,
        );
    });

    it(`string -> object`, () => {
        expect(tuiCoerceValue(`{"id": 1, "name": "Taiga"}`)).toEqual({
            id: 1,
            name: `Taiga`,
        });
        expect(tuiCoerceValue(`{"id": 1, "options": [1,2,3]}`)).toEqual({
            id: 1,
            options: [1, 2, 3],
        });
        expect(tuiCoerceValue(`{"message": "Extra comma", "options": [1,2,,3]}`)).toBe(
            `{"message": "Extra comma", "options": [1,2,,3]}`,
        );
        expect(tuiCoerceValue(`{"message": "No } at the end"`)).toBe(
            `{"message": "No } at the end"`,
        );
        expect(tuiCoerceValue(`{message: "No quotes for key"`)).toBe(
            `{message: "No quotes for key"`,
        );
    });
});
