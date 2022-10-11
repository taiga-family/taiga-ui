import {TuiMapper, TuiMapperPipe} from '@taiga-ui/cdk';

describe(`TuiMapper pipe`, () => {
    let pipe: TuiMapperPipe;
    const data = `test`;
    const args = [`three`, `eleven`];
    const mapper: TuiMapper<string, string> = (item, ...rest) =>
        item.toUpperCase() + rest.join(` `);

    beforeEach(() => {
        pipe = new TuiMapperPipe();
    });

    it(`Mapper works`, () => {
        expect(pipe.transform(data, mapper)).toBe(data.toUpperCase());
    });

    it(`Works with extra arguments`, () => {
        expect(pipe.transform(data, mapper, ...args)).toEqual(`TESTthree eleven`);
    });
});
