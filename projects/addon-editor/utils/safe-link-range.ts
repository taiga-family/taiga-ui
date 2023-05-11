export function tuiIsSafeLinkRange(range: Range): boolean {
    const textNodeLength = range.endContainer.nodeValue?.length || 0;

    return (
        range.endOffset - range.startOffset > 0 ||
        (range.endOffset - range.startOffset === 0 && textNodeLength === 1) ||
        (range.startOffset !== 0 &&
            textNodeLength > 1 &&
            range.endOffset !== textNodeLength)
    );
}
