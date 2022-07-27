import {tuiAssert} from '@taiga-ui/cdk';
import {MASK_CARET_TRAP} from '@taiga-ui/core/constants';
import {
    TuiTextMaskCorrectionHandler,
    TuiTextMaskList,
    TuiTextMaskListHandler,
} from '@taiga-ui/core/mask';

const ASSERTION = `Correction function must return single char or null`;

export function tuiCreateCorrectionMask(
    allowed: RegExp,
    correctionHandler: TuiTextMaskCorrectionHandler,
): TuiTextMaskListHandler {
    return rawValue => {
        const mask = rawValue.split(``).reduce<TuiTextMaskList>((result, char, index) => {
            const corrected = correctionHandler(char, index);

            tuiAssert.assert(corrected === null || corrected.length === 1, ASSERTION);

            if (!allowed.test(char) && !corrected) {
                return result;
            }

            if (allowed.test(char)) {
                return [...result, allowed];
            }

            if (corrected) {
                return [...result, corrected, MASK_CARET_TRAP];
            }

            return result;
        }, []);
        const lastIndex = mask.lastIndexOf(MASK_CARET_TRAP);
        const filtered = mask.filter(
            (item, index) => item !== MASK_CARET_TRAP || index === lastIndex,
        );

        return filtered.some(item => item !== allowed)
            ? [...filtered, allowed]
            : filtered;
    };
}
