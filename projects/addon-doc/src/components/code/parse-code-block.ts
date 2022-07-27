import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';

/**
 * @deprecated: use {@link tuiTryParseMarkdownCodeBlock} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function tryParseMarkdownCodeBlock(text: string = ``): string[] {
    const tokens: Token[] = new MarkdownIt().parse(text, {});
    const result = tokens
        .filter(({tag, type}) => tag === `code` && type === `fence`)
        .map(({content}) => content);

    return result.length ? result : [text];
}

export const tuiTryParseMarkdownCodeBlock = tryParseMarkdownCodeBlock;
