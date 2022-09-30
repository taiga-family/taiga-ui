import {tuiGetAcceptArray} from '../get-accept-array';

describe(`Accept array`, () => {
    it(`returns array of formats`, () => {
        expect(tuiGetAcceptArray(`image/*,application/pdf`)).toEqual([
            `image/*`,
            `application/pdf`,
        ]);
    });
});
