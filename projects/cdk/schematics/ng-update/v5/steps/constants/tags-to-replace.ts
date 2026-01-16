import {type ReplacementTag} from '../../../interfaces';

export const TAGS_TO_REPLACE: readonly ReplacementTag[] = [
    {
        from: 'tui-chip',
        to: 'span',
        addAttributes: ['tuiChip'],
    },
    {
        from: 'tui-badge',
        to: 'span',
        addAttributes: ['tuiBadge'],
    },
    {
        from: 'tui-pin',
        to: 'div',
        addAttributes: ['tuiPin'],
    },
    {
        from: 'tui-island',
        to: 'div',
        addAttributes: ['tuiCardLarge'],
    },
];
