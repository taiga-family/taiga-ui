import {rgbToHex} from '../rgb-to-hex';

describe('rgbToHex', () => {
    it('works', () => {
        expect(rgbToHex(42, 237, 3)).toBe('2aed03');
    });
});
