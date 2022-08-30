import {tuiIsEdge} from '../is-edge';
import {tuiIsEdgeOlderThan} from '../is-edge-older-than';
import {tuiIsFirefox} from '../is-firefox';

describe(`Browsers`, () => {
    it(`isEdge`, () => {
        expect(tuiIsEdge(`edge`)).toBe(true);
    });

    it(`isFirefox`, () => {
        expect(tuiIsFirefox(`firefox`)).toBe(true);
        expect(tuiIsFirefox(`Firefox`)).toBe(true);
    });

    it(`isEdgeOlderThan`, () => {
        expect(tuiIsEdgeOlderThan(17, `edge/16`)).toBe(true);
        expect(tuiIsEdgeOlderThan(17, `edge/18`)).toBe(false);
    });
});
