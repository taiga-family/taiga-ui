import {type ReplacementTag} from '../../../interfaces';

export const TAGS_TO_REPLACE: ReplacementTag[] = [
    {from: 'tui-card', to: 'tui-thumbnail-card'},
    {from: 'tui-text-area', to: 'tui-textarea'},
    {
        from: 'tui-input-count',
        to: 'tui-input-number',
        addAttributes: ['decimal="never"'],
        filterFn: element => element.attrs.some(attr => attr.name === '[step]'),
    },
    {
        from: 'tui-input-count',
        to: 'tui-input-number',
        addAttributes: ['decimal="never"', '[step]="1"'],
        filterFn: element => element.attrs.every(attr => attr.name !== '[step]'),
    },
    {
        from: 'tui-money',
        to: 'span',
    },
];
