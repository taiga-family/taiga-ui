import {TuiLetContext} from '@taiga-ui/cdk';

describe(`LetContext`, () => {
    it(`Has $implicit with data`, () => {
        const directive = {tuiLet: `data`};
        const context = new TuiLetContext(directive);

        expect(context.$implicit).toBe(`data`);
    });
});
