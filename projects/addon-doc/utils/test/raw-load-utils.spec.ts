import {tuiRawLoad, tuiRawLoadRecord} from '@taiga-ui/addon-doc';

describe(`tui-doc raw content utils`, () => {
    it(`rawLoadRecord`, async () => {
        const result = await tuiRawLoadRecord({
            HTML: Promise.resolve({default: `World`}),
            TypeScript: `Hello`,
        });

        expect(result).toEqual({
            HTML: `World`,
            TypeScript: `Hello`,
        });
    });

    it(`rawLoad`, async () => {
        let result = await tuiRawLoad(`Hello`);

        expect(result).toBe(`Hello`);

        result = await tuiRawLoad(Promise.resolve({default: `World`}));
        expect(result).toBe(`World`);
    });
});
