import {rawLoad} from '../raw-load';
import {rawLoadRecord} from '../raw-load-record';

describe(`tui-doc raw content utils`, () => {
    it(`rawLoadRecord`, async () => {
        const result = await rawLoadRecord({
            TypeScript: `Hello`,
            HTML: Promise.resolve({default: `World`}),
        });

        expect(result).toEqual({
            TypeScript: `Hello`,
            HTML: `World`,
        });
    });

    it(`rawLoad`, async () => {
        let result = await rawLoad(`Hello`);

        expect(result).toBe(`Hello`);

        result = await rawLoad(Promise.resolve({default: `World`}));
        expect(result).toBe(`World`);
    });
});
