import {isEdge} from '../is-edge';
import {tuiIsEdgeOlderThan} from '../is-edge-older-than';
import {isFirefox} from '../is-firefox';
import {tuiIsIE} from '../is-ie';

describe(`Browsers`, () => {
    it(`isIE`, () => {
        expect(tuiIsIE(`trident`)).toBe(true);
    });

    it(`isEdge`, () => {
        expect(isEdge(`edge`)).toBe(true);
    });

    it(`isFirefox`, () => {
        expect(isFirefox(`firefox`)).toBe(true);
        expect(isFirefox(`Firefox`)).toBe(true);
    });

    it(`isEdgeOlderThan`, () => {
        expect(tuiIsEdgeOlderThan(17, `edge/16`)).toBe(true);
        expect(tuiIsEdgeOlderThan(17, `edge/18`)).toBe(false);
    });
});
