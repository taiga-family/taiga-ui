import {ALWAYS_FALSE_HANDLER, ALWAYS_TRUE_HANDLER} from '@taiga-ui/cdk';

describe(`Handler functions`, () => {
    it(`Always false`, () => {
        expect(ALWAYS_FALSE_HANDLER()).toBe(false);
    });

    it(`Always true`, () => {
        expect(ALWAYS_TRUE_HANDLER()).toBe(true);
    });
});
