/**
 * Obfuscates a string by replacing certain characters with a symbol.
 *
 * @param value the input string to obfuscate
 * @param symbol the symbol for obfuscation
 * @return the obfuscated string
 *
 * The function determines which characters to obfuscate using a regular expression and the string's length:
 * - 8 or more: show first 2 and last 2 characters
 * - 4 to 7: show first and last character
 * - less than 4: obfuscate all characters
 * - obfuscates only alphanumeric characters
 */
export function tuiObfuscate(value: string, symbol: string): string {
    if (!value) {
        return value;
    }

    const match = /[\p{L}\p{N}]/gu;

    let visible = 0;
    let obfuscateIndexes: number[] = getObfuscateIndexes(value, match);

    if (obfuscateIndexes.length >= 8) {
        visible = 2;
    } else if (obfuscateIndexes.length >= 4) {
        visible = 1;
    }

    obfuscateIndexes = obfuscateIndexes.slice(visible, obfuscateIndexes.length);

    const lastIndex = Number(obfuscateIndexes.length) - visible;

    obfuscateIndexes = obfuscateIndexes.slice(0, lastIndex < 0 ? 0 : lastIndex);

    const result = value.split('');

    obfuscateIndexes.forEach((index) => {
        result[index] = symbol;
    });

    return result.join('');
}

function getObfuscateIndexes(value: string, match?: RegExp): number[] {
    if (!match) {
        return Array.from({length: value.length}).map((_, index) => index);
    }

    const obfuscateIndexes: number[] = [];
    let matchResult;
    let count = 0;

    while ((matchResult = match.exec(value)) !== null && count < value.length) {
        const start = matchResult.index;
        const end = match.lastIndex - 1;

        for (let i = start; i <= end; i++) {
            obfuscateIndexes.push(i);
        }

        count++;
    }

    return obfuscateIndexes;
}
