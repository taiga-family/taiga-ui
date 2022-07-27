import {getAcceptArray} from '../get-accept-array';

describe(`Accept array`, () => {
    it(`returns array of formats`, () => {
        expect(getAcceptArray(`image/*,application/pdf`)).toEqual([
            `image/*`,
            `application/pdf`,
        ]);
    });
});
