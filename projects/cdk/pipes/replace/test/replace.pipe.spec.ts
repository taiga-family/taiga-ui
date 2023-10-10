import {TuiReplacePipe} from '@taiga-ui/cdk';

describe(`TuiReplacePipe`, () => {
    let pipe: TuiReplacePipe;

    beforeEach(() => {
        pipe = new TuiReplacePipe();
    });

    it(`should return the replaced string`, () => {
        const result = pipe.transform(`Hello`, `Hello`, `World`);

        expect(result).toBe(`World`);
    });

    it(`regex`, () => {
        const result = pipe.transform(`111222333`, /1/g, `b`);

        expect(result).toBe(`bbb222333`);
    });

    it(`function`, () => {
        const result = pipe.transform(`abcdeabcde`, /a/g, () => `f`);

        expect(result).toBe(`fbcdefbcde`);
    });

    it(`unchanged`, () => {
        expect(pipe.transform(`abc`, ``, ``)).toBe(`abc`);
        expect(pipe.transform(``, ``, ``)).toBe(``);
        expect(pipe.transform(null, ``, ``)).toBe(``);
        expect(pipe.transform(undefined, ``, ``)).toBe(``);
    });
});
