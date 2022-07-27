import {TuiFormatCardPipe} from '@taiga-ui/addon-commerce/pipes';

describe(`TuiFormatCardPipe`, () => {
    const pipe = new TuiFormatCardPipe();

    it(`value is empty`, () => {
        expect(pipe.transform()).toEqual(``);
        expect(pipe.transform(undefined)).toEqual(``);
        expect(pipe.transform(null)).toEqual(``);
        expect(pipe.transform(null, true)).toEqual(``);
        expect(pipe.transform(undefined, true)).toEqual(``);
        expect(pipe.transform(null, true)).toEqual(``);
    });

    it(`value has card`, () => {
        expect(pipe.transform(`1234`)).toEqual(`1234`);
        expect(pipe.transform(`123456`)).toEqual(`1234 56`);
        expect(pipe.transform(`1234567891011111`)).toEqual(`1234 5678 9101 1111`);
    });

    it(`card value has whitespaces`, () => {
        expect(pipe.transform(`1234 5678 9101`)).toEqual(`1234  567 8 91 01`);
        expect(pipe.transform(`1234 5678 9101 1111`)).toEqual(`1234  567 8 91 01 1 111`);
        expect(pipe.transform(`1234 56 78 9101 11 11`)).toEqual(
            `1234  56  78 9 101  11 1 1`,
        );
    });
});
