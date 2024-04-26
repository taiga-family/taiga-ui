import type {HtmlComment} from '../../../interfaces';

export const HTML_COMMENTS: HtmlComment[] = [
    {
        tag: 'tui-toggle',
        withAttrs: ['singleColor', 'showLoader'],
        comment:
            'toggle [singleColor] and [showLoader] inputs have been removed due to design changes',
    },
    {
        tag: 'tui-table-pagination',
        withAttrs: ['[(page)]', '[(size)]', '(pageChange)', '(sizeChange)'],
        comment:
            '(pageChange) and (sizeChange) outputs have been removed. Use (paginationChange) instead',
    },
    {
        tag: 'tui-radio',
        withAttrs: ['identityMatcher', 'showLoader'],
        comment:
            'radio [identityMatcher] and [pseudoDisabled] inputs have been removed. If you need a workaround, please start a discussion on GitHub to think together',
    },
    {
        tag: 'tui-rating',
        withAttrs: ['iconFilled', 'iconNormal'],
        comment:
            'rating [iconFilled] and [iconNormal] inputs have been removed. Use [icon] instead. See example https://taiga-ui.dev/components/rating#icons',
    },
    {
        tag: 'button',
        withAttrs: ['tuiAction'],
        comment:
            'tuiAction has been removed in favour of tuiCardLarge + tuiSurface. Change the template according to this example https://taiga-ui.dev/layout/card-large',
    },
    {
        tag: 'a',
        withAttrs: ['tuiAction'],
        comment:
            'tuiAction has been removed in favour of tuiCardLarge + tuiSurface. Change the template according to this example https://taiga-ui.dev/layout/card-large',
    },
    {
        tag: 'button',
        withAttrs: ['[shape]'],
        comment:
            '[shape] input has been removed. Please use border-radius css property for rounding borders https://taiga-ui.dev/components/button',
    },
];
