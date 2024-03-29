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
];
