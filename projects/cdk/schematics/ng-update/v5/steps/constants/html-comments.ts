import {type HtmlComment} from '../../../interfaces';

export const HTML_COMMENTS: HtmlComment[] = [
    {
        tag: 'tui-range',
        withAttrs: ['(activeThumbChange)'],
        comment:
            '(activeThumbChange) emits "start"/"end" instead of "left"/"right". Adjust your code accordingly',
    },
];
