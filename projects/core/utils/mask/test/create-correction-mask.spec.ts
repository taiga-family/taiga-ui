import {MASK_CARET_TRAP} from '../../../constants/mask-caret-trap';
import {TuiTextMaskCorrectionHandler} from '../../../mask';
import {tuiCreateCorrectionMask} from '../create-correction-mask';

const REGEXP = /[0-9]/;
const HANDLER: TuiTextMaskCorrectionHandler = char => (char === `q` ? `3` : null);
const MASK = tuiCreateCorrectionMask(REGEXP, HANDLER);

describe(`tuiCreateCorrectionMask return`, () => {
    it(`regexes if characters are valid`, () => {
        expect(MASK(`123`, {rawValue: `123`})).toEqual([REGEXP, REGEXP, REGEXP]);
    });

    it(`corrected character, caret trap and a regex if character can be fixed`, () => {
        expect(MASK(`12q`, {rawValue: `12q`})).toEqual([
            REGEXP,
            REGEXP,
            `3`,
            MASK_CARET_TRAP,
            REGEXP,
        ]);
    });

    it(`discards a char if it cannot be fixed`, () => {
        expect(MASK(`12w`, {rawValue: `12w`})).toEqual([REGEXP, REGEXP]);
    });

    it(`adds only one caret trap after last fixed character`, () => {
        expect(MASK(`q2q`, {rawValue: `q2q`})).toEqual([
            `3`,
            REGEXP,
            `3`,
            MASK_CARET_TRAP,
            REGEXP,
        ]);
    });
});
