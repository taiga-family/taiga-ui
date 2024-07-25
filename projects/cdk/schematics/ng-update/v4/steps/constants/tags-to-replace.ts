import type {ReplacementTag} from '../../../interfaces';

export const TAGS_TO_REPLACE: ReplacementTag[] = [
    {from: 'tui-card', to: 'tui-thumbnail-card'},
    {from: 'tui-text-area', to: 'tui-textarea'},
    {from: 'tui-svg', to: 'tui-icon'},
    {
        from: 'tui-input-count',
        to: 'tui-input-number',
        addAttributes: ['decimal="never"'],
        filterFn: (element) => element.attrs.some((attr) => attr.name === '[step]'),
    },
    {
        from: 'tui-input-count',
        to: 'tui-input-number',
        addAttributes: ['decimal="never"', '[step]="1"'],
        filterFn: (element) => element.attrs.every((attr) => attr.name !== '[step]'),
    },
    {
        from: 'tui-money',
        to: 'span',
    },
    {
        from: 'tui-checkbox-labeled',
        to: 'input',
        addAttributes: ['tuiCheckbox', 'type="checkbox"'],
    },
    {
        from: 'tui-radio-labeled',
        to: 'input',
        addAttributes: ['tuiRadio', 'type="radio"'],
    },
    {
        from: 'tui-checkbox-block',
        to: 'input',
        addAttributes: ['tuiCheckbox', 'type="checkbox"'],
    },
    {
        from: 'tui-radio-block',
        to: 'input',
        addAttributes: ['tuiRadio', 'type="radio"'],
    },
    {
        from: 'tui-hosted-dropdown',
        to: 'div',
        filterFn: (el) =>
            el.attrs.some((attr) => attr.name === '[open]' || attr.name === '[(open)]'),
    },
    {
        from: 'tui-hosted-dropdown',
        to: 'div',
        filterFn: (el) =>
            el.attrs.every((attr) => attr.name !== '[open]' && attr.name !== '[(open)]'),
        addAttributes: ['tuiDropdownOpen'],
    },
    {
        from: 'tui-progress-segmented',
        to: 'progress',
        addAttributes: ['tuiProgressBar'],
    },
    {
        from: 'tui-marker-icon',
        to: 'tui-avatar',
    },
    {from: 'tui-input-card-grouped', to: 'tui-input-card-group'},
];
