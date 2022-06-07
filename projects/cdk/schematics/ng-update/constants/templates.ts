export interface ReplacementAttributes {
    readonly from: {
        readonly attrName: string;
        readonly withTagNames?: string[];
        readonly withAttrsNames?: string[];
    };
    readonly to: {
        readonly attrName: string;
    };
}

export interface ReplacementTags {
    readonly from: string;
    readonly to: string;
    readonly addAttributes: string[];
}

export const ATTRS_TO_REPLACE: ReplacementAttributes[] = [
    {
        from: {attrName: 'tuiResizableColumn', withAttrsNames: ['tuiResizableColumn']},
        to: {attrName: 'tuiTh [resizable]="true"'},
    },
    {
        from: {attrName: 'new', withTagNames: ['tui-editor']},
        to: {attrName: ''},
    },
    {
        from: {
            attrName: '[hovered]',
            withTagNames: ['tui-wrapper'],
            withAttrsNames: ['tuiWrapper'],
        },
        to: {
            attrName: '[hover]',
        },
    },
    {
        from: {
            attrName: '[pressed]',
            withTagNames: ['tui-wrapper'],
            withAttrsNames: ['tuiWrapper'],
        },
        to: {
            attrName: '[active]',
        },
    },
];

export const TAGS_TO_REPLACE: ReplacementTags[] = [
    {
        from: 'tui-group',
        to: 'div',
        addAttributes: ['tuiGroup'],
    },
    {
        from: 'tui-wrapper',
        to: 'div',
        addAttributes: ['tuiWrapper'],
    },
];
