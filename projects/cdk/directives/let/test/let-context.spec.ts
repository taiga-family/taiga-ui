import {TuiLetContext} from '../let-context';

describe(`LetContext`, () => {
    it(`Has $implicit with data`, () => {
        const directive = {tuiLet: `data`};
        const context = new TuiLetContext(directive);

        expect(context.$implicit).toBe(`data`);
    });
});
