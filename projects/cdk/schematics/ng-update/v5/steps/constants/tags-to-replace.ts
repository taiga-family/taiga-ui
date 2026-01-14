import {type ReplacementTag} from '../../../interfaces';

export const TAGS_TO_REPLACE: readonly ReplacementTag[] = [
    {
        from: 'tui-chip',
        to: 'span',
        ensureNonSelfClosingNative: true,
        addAttributes: ['tuiChip'],
    },
    {
        from: 'tui-badge',
        to: 'span',
        ensureNonSelfClosingNative: true,
        addAttributes: ['tuiBadge'],
    },
    {
        from: 'tui-pin',
        to: 'div',
        ensureNonSelfClosingNative: true,
        addAttributes: ['tuiPin'],
    },
];
