import type {TuiMapper} from '@taiga-ui/cdk';
import {TuiMapperPipe} from '@taiga-ui/cdk';

describe('TuiMapper pipe', () => {
    let pipe: TuiMapperPipe;
    const data = 'test';
    const args = ['three', 'eleven'];
    const mapper: TuiMapper<[string, ...string[]], string> = (item, ...rest) =>
        item.toUpperCase() + rest.join(' ');

    beforeEach(() => {
        pipe = new TuiMapperPipe();
    });

    it('mapper works', () => {
        expect(pipe.transform(data, mapper)).toBe(data.toUpperCase());
    });

    it('works with extra arguments', () => {
        expect(pipe.transform(data, mapper, ...args)).toBe('TESTthree eleven');
    });
});
