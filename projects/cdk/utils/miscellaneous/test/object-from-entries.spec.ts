import {tuiObjectFromEntries} from '@taiga-ui/cdk';

describe(`tuiObjectFromEntries`, () => {
    it(`returns an empty object when given an empty array`, () => {
        const result = tuiObjectFromEntries([]);

        expect(result).toEqual({});
    });

    it(`returns an object with one key-value pair`, () => {
        const result = tuiObjectFromEntries([[`key1`, `value1`]]);

        expect(result).toEqual({key1: `value1`});
    });

    it(`returns an object with multiple key-value pairs`, () => {
        const result = tuiObjectFromEntries([
            [`key1`, `value1`],
            [`key2`, `value2`],
            [`key3`, `value3`],
        ]);

        expect(result).toEqual({
            key1: `value1`,
            key2: `value2`,
            key3: `value3`,
        });
    });

    it(`works with numeric keys`, () => {
        const result = tuiObjectFromEntries([
            [1, `one`],
            [2, `two`],
            [3, `three`],
        ]);

        expect(result).toEqual({
            1: `one`,
            2: `two`,
            3: `three`,
        });
    });

    it(`overwrites values for duplicate keys`, () => {
        const result = tuiObjectFromEntries([
            [`key1`, `value1`],
            [`key1`, `value2`],
            [`key2`, `value3`],
        ]);

        expect(result).toEqual({
            key1: `value2`,
            key2: `value3`,
        });
    });
});
