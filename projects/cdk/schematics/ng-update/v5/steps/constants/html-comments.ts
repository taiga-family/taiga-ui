import {type HtmlComment} from '../../../interfaces';

export const HTML_COMMENTS: HtmlComment[] = [
    {
        tag: 'tui-range',
        withAttrs: ['(activeThumbChange)'],
        comment:
            '(activeThumbChange) emits "start"/"end" instead of "left"/"right". Adjust your code accordingly',
    },
    {
        tag: 'tui-accordion',
        comment:
            'tui-accordion-item has been removed. Use new tuiAccordion instead. See example https://taiga-ui.dev/components/accordion',
    },
];
