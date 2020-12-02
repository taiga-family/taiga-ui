import {getPadding} from '../get-padding';

describe('getPadding', () => {
    it('calculates all options', () => {
        expect(getPadding(false, true, true, true, true)).toBe(12 + 24 * 3 + 40);
    });
});
