import {MaskitoOptions} from '@maskito/core';
import {tuiCreateCorrectionMask, TuiTextMaskListHandler} from '@taiga-ui/core';

const ALLOWED_REGEXP = /[A-Z]| /;
const MAP: Record<string, string> = {
    А: `F`,
    В: `D`,
    Г: `U`,
    Д: `L`,
    Е: `T`,
    З: `P`,
    И: `B`,
    Й: `Q`,
    К: `R`,
    Л: `K`,
    М: `V`,
    Н: `Y`,
    О: `J`,
    П: `G`,
    Р: `H`,
    С: `C`,
    Т: `N`,
    У: `E`,
    Ф: `A`,
    Ц: `W`,
    Ч: `X`,
    Ш: `I`,
    Щ: `O`,
    Ы: `S`,
    Ь: `M`,
    Я: `Z`,
};

// TODO: delete in v4.0
function toEnglishUppercaseLegacy(char: string): string | null {
    const uppercase = char.toUpperCase();
    const result = ALLOWED_REGEXP.test(uppercase) ? uppercase : MAP[uppercase];

    return result || null;
}

function toEnglishUppercase(value: string): string {
    return value
        .toUpperCase()
        .split(``)
        .map(char => MAP[char] || char)
        .join(``);
}

export const TUI_CARD_HOLDER_MASK: MaskitoOptions = {
    mask: /^[a-z\s]+$/i,
    preprocessors: [
        ({elementState, data}) => {
            const {value, selection} = elementState;

            return {
                elementState: {
                    selection,
                    value: toEnglishUppercase(value),
                },
                data: toEnglishUppercase(data),
            };
        },
    ],
};

/**
 * @deprecated Use {@link TUI_CARD_HOLDER_MASK} with {@link https://github.com/Tinkoff/maskito Maskito}
 * TODO: delete in v4.0
 */
export const cardHolderMask: TuiTextMaskListHandler = tuiCreateCorrectionMask(
    ALLOWED_REGEXP,
    toEnglishUppercaseLegacy,
);
