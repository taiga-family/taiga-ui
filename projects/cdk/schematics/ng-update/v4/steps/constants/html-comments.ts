import {HtmlComment} from '../../../interfaces';

export const HTML_COMMENTS: HtmlComment[] = [
    {
        tag: `tui-toggle`,
        withAttrs: [`singleColor`, `showLoader`],
        comment: `toggle [singleColor] and [showLoader] inputs have been removed due to design changes`,
    },
    {
        tag: `tui-table-pagination`,
        withAttrs: [`[(page)]`, `[(size)]`, `(pageChange)`, `(sizeChange)`],
        comment: `(pageChange) and (sizeChange) outputs have been removed. Use (paginationChange) instead`,
    },
];
