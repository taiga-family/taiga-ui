import {isEdge} from '../is-edge';
import {isEdgeOlderThan} from '../is-edge-older-than';
import {isFirefox} from '../is-firefox';
import {isIE} from '../is-IE';

describe('Browsers', () => {
    it('isIE', () => {
        expect(isIE('trident')).toBe(true);
    });

    it('isEdge', () => {
        expect(isEdge('edge')).toBe(true);
    });

    it('isFirefox', () => {
        expect(isFirefox('firefox')).toBe(true);
        expect(isFirefox('Firefox')).toBe(true);
    });

    it('isEdgeOlderThan', () => {
        expect(isEdgeOlderThan(17, 'edge/16')).toBe(true);
        expect(isEdgeOlderThan(17, 'edge/18')).toBe(false);
    });
});
