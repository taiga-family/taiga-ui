import {TuiIntegerPartPipe} from '@taiga-ui/addon-commerce';
import {TUI_DEFAULT_NUMBER_FORMAT} from '@taiga-ui/core';

/* eslint-disable no-irregular-whitespace */
describe(`TuiIntegerPart`, () => {
    it(`Config with decimal limit`, () => {
        const pipe = new TuiIntegerPartPipe({
            ...TUI_DEFAULT_NUMBER_FORMAT,
            decimalLimit: 2,
        });

        expect(pipe.transform(10123.123)).toEqual(`10 123`);
        expect(pipe.transform(10123)).toEqual(`10 123`);
        expect(pipe.transform(null as unknown as number)).toEqual(`0`);
        expect(pipe.transform(undefined as unknown as number)).toEqual(`NaN`);
        expect(pipe.transform(`` as unknown as number)).toEqual(`0`);
        expect(pipe.transform(`10,5` as unknown as number)).toEqual(`NaN`);
        expect(pipe.transform(`10.5` as unknown as number)).toEqual(`10`);
    });

    describe(`Config with rounding`, () => {
        it(`rounding`, () => {
            const pipe = new TuiIntegerPartPipe({
                ...TUI_DEFAULT_NUMBER_FORMAT,
                rounding: `round`,
            });

            expect(pipe.transform(2004.87)).toEqual(`2 004`);
            expect(pipe.transform(1000.87)).toEqual(`1 000`);
            expect(pipe.transform(100.99, 1)).toEqual(`101`);
        });

        it(`ceil`, () => {
            const pipe = new TuiIntegerPartPipe({
                ...TUI_DEFAULT_NUMBER_FORMAT,
                rounding: `ceil`,
            });

            expect(pipe.transform(2004.87)).toEqual(`2 004`);
            expect(pipe.transform(1000.87)).toEqual(`1 000`);
            expect(pipe.transform(100.99, 1)).toEqual(`101`);
        });

        it(`floor`, () => {
            const pipe = new TuiIntegerPartPipe({
                ...TUI_DEFAULT_NUMBER_FORMAT,
                rounding: `floor`,
            });

            expect(pipe.transform(2004.87)).toEqual(`2 004`);
            expect(pipe.transform(1000.87)).toEqual(`1 000`);
            expect(pipe.transform(100.99, 1)).toEqual(`100`);
        });
    });
});
