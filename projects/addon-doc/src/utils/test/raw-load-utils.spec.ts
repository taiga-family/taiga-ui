import {tuiRawLoad} from '../raw-load';
import {tuiRawLoadRecord} from '../raw-load-record';

describe(`tui-doc raw content utils`, () => {
    it(`rawLoadRecord`, async () => {
        const result = await tuiRawLoadRecord({
            TypeScript: `Hello`,
            HTML: Promise.resolve({default: `World`}),
        });

        expect(result).toEqual({
            TypeScript: `Hello`,
            HTML: `World`,
        });
    });

    it(`rawLoad`, async () => {
        let result = await tuiRawLoad(`Hello`);

        expect(result).toBe(`Hello`);

        result = await tuiRawLoad(Promise.resolve({default: `World`}));
        expect(result).toBe(`World`);
    });
});
