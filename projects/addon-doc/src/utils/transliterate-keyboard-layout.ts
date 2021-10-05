const MAP: Record<string, string> = {
    а: 'f',
    б: ',',
    в: 'd',
    г: 'u',
    д: 'l',
    е: 't',
    ё: '`',
    ж: ';',
    з: 'p',
    и: 'b',
    й: 'q',
    к: 'r',
    л: 'k',
    м: 'v',
    н: 'y',
    о: 'j',
    п: 'g',
    р: 'h',
    с: 'c',
    т: 'n',
    у: 'e',
    ф: 'a',
    х: '[',
    ц: 'w',
    ч: 'x',
    ш: 'i',
    щ: 'o',
    ъ: ']',
    ы: 's',
    ь: 'm',
    ю: '.',
    я: 'z',
};

/**
 * Translates text mistakenly typed in the Russian layout into English
 * @param string string with Russian layout characters
 * @return string with English layout characters
 */
export function transliterateKeyboardLayout(string: string): string {
    let newStr = '';

    for (let i = 0; i < string.length; i++) {
        newStr += string.charAt(i) in MAP ? MAP[string.charAt(i)] : string.charAt(i);
    }

    return newStr;
}
