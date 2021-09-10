import {getBorder} from '../get-border';

describe('getBorder', () => {
    it('calculates all options', () => {
        expect(getBorder(false, true, true, true, true)).toBe(0.75 + 1.5 * 3 + 2.5);
    });
});
