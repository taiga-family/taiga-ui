export function tuiIsSafeLinkRange(range: Range): boolean {
    return (
        range.endOffset - range.startOffset > 0 ||
        (range.startOffset !== 0 &&
            range.endOffset !== (range.endContainer.nodeValue?.length || 0))
    );
}
