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
});
