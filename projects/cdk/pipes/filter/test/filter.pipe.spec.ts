import {TuiFilterPipe, type TuiMatcher} from '@taiga-ui/cdk';

describe('TuiFilter pipe', () => {
    let pipe: TuiFilterPipe;
    const data = ['two', 'eleven'];
    const args = ['two', 'four'];
    const matcher: TuiMatcher<[string, number, ...string[]]> = (item, search, ...rest) =>
        item.length === search || rest.includes(item);

    beforeEach(() => {
        pipe = new TuiFilterPipe();
    });

    it('filter works', () => {
        expect(pipe.transform(data, matcher, 6)).toEqual([data[1]]);
    });

    it('filter returns empty array if nothing matched', () => {
        expect(pipe.transform(data, matcher, 5)).toEqual([]);
    });

    it('filter works with extra arguments', () => {
        expect(pipe.transform(data, matcher, 5, ...args)).toEqual([data[0]]);
    });
});
