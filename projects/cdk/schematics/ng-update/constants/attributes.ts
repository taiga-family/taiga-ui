export interface ReplacementAttributes {
    from: {
        attrName: string;
        tagNames?: string[];
    };
    to: {
        attrName: string;
    };
}

export const ATTRS_TO_REPLACE: ReplacementAttributes[] = [
    {
        from: {attrName: 'tuiResizableColumn'},
        to: {attrName: 'tuiTh [resizable]="true"'},
    },
    {
        from: {attrName: 'new'},
        to: {attrName: ''},
    },
];
