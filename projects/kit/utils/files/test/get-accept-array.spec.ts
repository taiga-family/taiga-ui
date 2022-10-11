import {tuiGetAcceptArray} from '@taiga-ui/kit';

describe(`Accept array`, () => {
    it(`returns array of formats`, () => {
        expect(tuiGetAcceptArray(`image/*,application/pdf`)).toEqual([
            `image/*`,
            `application/pdf`,
        ]);
    });
});
