import {TuiRepeatTimesPipe} from '@taiga-ui/cdk';

describe('TuiRepeatTimes pipe', () => {
    const pipe = new TuiRepeatTimesPipe();

    it('works', () => {
        expect(pipe.transform(-2)).toEqual([]);
        expect(pipe.transform(-1)).toEqual([]);
        expect(pipe.transform(0)).toEqual([]);
        expect(pipe.transform(1)).toEqual([0]);
        expect(pipe.transform(2)).toEqual([0, 1]);
        expect(pipe.transform(3)).toEqual([0, 1, 2]);
        expect(pipe.transform(4)).toEqual([0, 1, 2, 3]);
        expect(pipe.transform(5)).toEqual([0, 1, 2, 3, 4]);
    });
});
