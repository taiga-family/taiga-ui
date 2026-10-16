import {tuiVersionParts} from '@taiga-ui/addon-doc';

describe('tuiVersionParts', () => {
    it('parses major and minor from a full version', () => {
        expect(tuiVersionParts('5.19.0')).toEqual({major: 5, minor: 19});
    });

    it('yields NaN parts for an empty or missing version', () => {
        expect(tuiVersionParts()).toEqual({major: Number.NaN, minor: Number.NaN});
        expect(tuiVersionParts('')).toEqual({major: Number.NaN, minor: Number.NaN});
    });

    it('yields NaN for a missing minor', () => {
        expect(tuiVersionParts('6')).toEqual({major: 6, minor: Number.NaN});
    });
});
