import MarkdownIt from 'markdown-it';

export function tuiTryParseMarkdownCodeBlock(text = ''): string[] {
    const tokens: MarkdownIt.Token[] = new MarkdownIt().parse(text, {});
    const result = tokens
        .filter(({tag, type}) => tag === 'code' && type === 'fence')
        .map(({content}) => content.trim());

    return result.length ? result : [text];
}
