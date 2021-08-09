import {getBorder} from '../get-border';

describe('getBorder', () => {
    it('calculates all options', () => {
        expect(getBorder(false, true, true, true, true)).toBe(12 + 24 * 3 + 40);
    });
});
