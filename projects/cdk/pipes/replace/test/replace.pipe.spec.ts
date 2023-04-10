import {TuiReplacePipe} from '@taiga-ui/cdk';

describe(`TuiReplacePipe`, () => {
    let pipe: TuiReplacePipe;

    beforeEach(() => {
        pipe = new TuiReplacePipe();
    });

    it(`should return the replaced string`, () => {
        const result = pipe.transform(`Hello`, `Hello`, `World`);

        expect(result).toEqual(`World`);
    });

    it(`regex`, () => {
        const result = pipe.transform(`111222333`, /1/g, `b`);

        expect(result).toEqual(`bbb222333`);
    });

    it(`function`, () => {
        const result = pipe.transform(`abcdeabcde`, /a/g, () => `f`);

        expect(result).toEqual(`fbcdefbcde`);
    });

    it(`unchanged`, () => {
        expect(pipe.transform(`abc`, ``, ``)).toEqual(`abc`);
        expect(pipe.transform(``, ``, ``)).toEqual(``);
        expect(pipe.transform(null, ``, ``)).toEqual(``);
        expect(pipe.transform(undefined, ``, ``)).toEqual(``);
    });
});
