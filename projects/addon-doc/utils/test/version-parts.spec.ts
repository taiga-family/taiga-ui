import {tuiVersionParts} from '@taiga-ui/addon-doc';

describe('tuiVersionParts', () => {
    it('parses major and minor from a full version', () => {
        expect(tuiVersionParts('4.19.0')).toEqual({major: 4, minor: 19});
    });

    it('yields NaN parts for an empty or missing version', () => {
        expect(tuiVersionParts()).toEqual({major: Number.NaN, minor: Number.NaN});
        expect(tuiVersionParts('')).toEqual({major: Number.NaN, minor: Number.NaN});
    });

    it('yields NaN for a missing minor', () => {
        expect(tuiVersionParts('4')).toEqual({major: 4, minor: Number.NaN});
    });
});
