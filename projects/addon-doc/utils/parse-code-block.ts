import MarkdownIt from 'markdown-it';
import type Token from 'markdown-it/lib/token';

export function tuiTryParseMarkdownCodeBlock(text = ''): string[] {
    const tokens: Token[] = new MarkdownIt().parse(text, {});
    const result = tokens
        .filter(({tag, type}) => tag === 'code' && type === 'fence')
        .map(({content}) => content.trim());

    return result.length ? result : [text];
}
