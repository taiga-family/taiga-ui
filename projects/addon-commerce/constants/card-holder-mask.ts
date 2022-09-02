import type {TuiTextMaskListHandler} from '@taiga-ui/core';
import {tuiCreateCorrectionMask} from '@taiga-ui/core';

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

function toEnglishUppercase(char: string): string | null {
    const uppercase = char.toUpperCase();
    const result = ALLOWED_REGEXP.test(uppercase) ? uppercase : MAP[uppercase];

    return result || null;
}

export const cardHolderMask: TuiTextMaskListHandler = tuiCreateCorrectionMask(
    ALLOWED_REGEXP,
    toEnglishUppercase,
);
