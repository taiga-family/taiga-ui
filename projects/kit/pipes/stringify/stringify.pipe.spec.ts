import {TuiStringifyPipe} from './stringify.pipe';

describe(`TuiStringify pipe`, () => {
    it(`works`, () => {
        const pipe = new TuiStringifyPipe();

        expect(pipe.transform(`data`)({data: 237, value: 327})).toBe(`237`);
    });

    it(`turns null into empty string`, () => {
        const pipe = new TuiStringifyPipe();

        expect(pipe.transform(`data`)({data: null, value: 327})).toBe(``);
    });

    it(`keeps falsy values intact`, () => {
        const pipe = new TuiStringifyPipe();

        expect(pipe.transform(`data`)({data: 0, value: 327})).toBe(`0`);
    });
});
