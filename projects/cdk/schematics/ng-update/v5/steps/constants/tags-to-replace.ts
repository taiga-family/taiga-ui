import {hasElementAttribute} from '../../../../utils/templates/elements';
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
    {
        from: 'nav',
        to: 'tui-stepper',
        // cspell:disable-next-line
        filterFn: (element) => hasElementAttribute(element, 'tuistepper'),
    },
    {
        from: 'nav',
        to: 'tui-tabs',
        // cspell:disable-next-line
        filterFn: (element) => hasElementAttribute(element, 'tuitabs'),
    },
];
