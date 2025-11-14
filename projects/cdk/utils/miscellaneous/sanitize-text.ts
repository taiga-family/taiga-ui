/**
 * Sanitizes pasted or dropped text by removing invisible and control characters
 * that can appear in clipboard or drag-and-drop data.
 *
 * Removes:
 * 1. ASCII control characters (0x00–0x1F) — non-printable characters like
 *    NULL, BEL, BS, CR, LF, TAB, ESC, etc.
 * 2. Extended control characters (0x7F–0x9F) — C1 control codes from ISO-8859-1,
 *    often found in legacy or malformed text encodings.
 * 3. Zero-width and special Unicode characters:
 *    - U+200B ZERO WIDTH SPACE
 *    - U+200C ZERO WIDTH NON-JOINER
 *    - U+200D ZERO WIDTH JOINER
 *    - U+FEFF BYTE ORDER MARK (BOM)
 *
 * @param {string} value - The input string from clipboard or drag event.
 * @returns {string} - A cleaned string without control or invisible characters.
 *
 * @example
 * tuiSanitizeText('Hello\u0000World\u200B!');
 * // → "HelloWorld!"
 */
export function tuiSanitizeText(value: string): string {
    // eslint-disable-next-line no-control-regex
    const controlCharsRegex = /[\x00-\x1F\x7F-\x9F]/g;
    const zeroWidthCharsRegex = /[\u200B-\u200D\uFEFF]/g;

    return value.replaceAll(controlCharsRegex, '').replaceAll(zeroWidthCharsRegex, '');
}
