import {TuiYear} from '@taiga-ui/cdk';
import {TuiToYearPipe} from '@taiga-ui/kit';

describe(`TuiToYear pipe`, () => {
    it(`works`, () => {
        const pipe = new TuiToYearPipe();

        expect(pipe.transform(237)).toEqual(new TuiYear(237));
    });
});
