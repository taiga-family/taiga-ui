import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';

export function tryParseMarkdownCodeBlock(text: string): string[] {
    const tokens: Token[] = new MarkdownIt().parse(text, {});
    const result = tokens.filter(({tag}) => tag === 'code').map(({content}) => content);

    return result.length ? result : [text];
}
