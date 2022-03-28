interface ReplacementEnum {
    name: string;
    replaceValues: Record<string, string>;
}

export const ENUMS_FOR_REPLACE: ReplacementEnum[] = [
    {
        name: 'TuiTextAlign',
        replaceValues: {
            Left: 'left',
            Right: 'right',
            Center: 'center',
        },
    },
    {
        name: 'TuiLineType',
        replaceValues: {
            Solid: 'solid',
            Dashed: 'dashed',
            Dotted: 'dotted',
            None: 'none',
            Hidden: 'hidden',
        },
    },
    {
        name: 'TuiMoneySign',
        replaceValues: {
            NegativeOnly: 'negative-only',
            Always: 'always',
            Never: 'never',
            ForceNegative: 'force-negative',
            ForcePositive: 'force-positive',
        },
    },
    {
        name: 'TuiDecimal',
        replaceValues: {
            NotZero: 'not-zero',
            Always: 'always',
            Never: 'never',
        },
    },
    {
        name: 'TuiInputType',
        replaceValues: {
            Text: 'text',
            Tel: 'tel',
            Email: 'email',
            Url: 'url',
            Password: 'password',
        },
    },
    {
        name: 'TuiOverscrollMode',
        replaceValues: {
            All: 'all',
            Scroll: 'scroll',
            None: 'none',
        },
    },
];
