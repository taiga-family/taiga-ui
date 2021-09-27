import {TuiStringifyPipe} from './stringify.pipe';

describe('TuiStringify pipe', () => {
    it('works', () => {
        const pipe = new TuiStringifyPipe();

        expect(pipe.transform('data')({data: 237, value: 327})).toEqual('237');
    });
});
