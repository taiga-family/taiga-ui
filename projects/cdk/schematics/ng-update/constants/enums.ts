interface ReplacementEnum {
    readonly name: string;
    readonly replaceValues: Record<string, string>;
    readonly keepAsType?: boolean;
}

export const ENUMS_TO_REPLACE: ReplacementEnum[] = [
    {
        name: 'TuiPaymentSystem',
        replaceValues: {
            Visa: 'visa',
            Electron: 'electron',
            Mastercard: 'mastercard',
            Maestro: 'maestro',
            Mir: 'mir',
        },
        keepAsType: true,
    },
    {
        name: 'TuiTextAlign',
        replaceValues: {
            Left: 'left',
            Right: 'right',
            Center: 'center',
        },
        keepAsType: false,
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
    {
        name: 'TuiInputMode',
        replaceValues: {
            None: 'none',
            Text: 'text',
            Decimal: 'decimal',
            Numeric: 'numeric',
            Tel: 'tel',
            Email: 'email',
            Url: 'url',
            Search: 'search',
        },
    },
    {
        name: 'TuiStepState',
        replaceValues: {
            Normal: 'normal',
            Error: 'error',
            Pass: 'pass',
        },
        keepAsType: true,
    },
    {
        name: 'TuiStatus',
        replaceValues: {
            Default: 'default',
            Primary: 'primary',
            Custom: 'custom',
            Success: 'success',
            Error: 'error',
            Warning: 'warning',
        },
    },
    {
        name: 'TuiMarkerIconMode',
        replaceValues: {
            Link: 'link',
            Primary: 'primary',
            Warning: 'warning',
            White: 'white',
            Secondary: 'secondary',
            Success: 'success',
            Error: 'error',
            OnDark: 'onDark',
        },
    },
    {
        name: 'TuiDropdownPosition',
        replaceValues: {
            Selection: 'selection',
            Word: 'word',
            Tag: 'tag',
        },
        keepAsType: true,
    },
    {
        name: 'TuiBorders',
        replaceValues: {
            All: 'all',
            TopBottom: 'top-bottom',
        },
        keepAsType: false,
    },
    {
        name: 'TuiButtonShape',
        replaceValues: {
            Square: 'square',
            Rounded: 'rounded',
        },
    },
    {
        name: 'TuiDropdownWidth',
        replaceValues: {
            Fixed: 'fixed',
            Min: 'min',
            Auto: 'auto',
        },
    },
    {
        name: 'TuiHintMode',
        replaceValues: {
            Error: 'error',
            OnDark: 'onDark',
            Overflow: 'overflow',
        },
    },
    {
        name: 'TuiLinkMode',
        replaceValues: {
            Positive: 'positive',
            Negative: 'negative',
        },
        keepAsType: false,
    },
    {
        name: 'TuiOrientation',
        replaceValues: {
            Vertical: 'vertical',
            Horizontal: 'horizontal',
        },
    },
    {
        name: 'TuiSupportColor',
        replaceValues: {
            Mustard: 'support-01',
            Texas: 'support-02',
            Tan: 'support-03',
            Salmon: 'support-04',
            Sienna: 'support-05',
            Bittersweet: 'support-06',
            Pinkie: 'support-07',
            Charm: 'support-08',
            Amethist: 'support-09',
            Helio: 'support-10',
            Lilac: 'support-11',
            Malibu: 'support-12',
            Havelock: 'support-13',
            Picton: 'support-14',
            Mint: 'support-15',
            Fountain: 'support-16',
            Puertorico: 'support-17',
            Bay: 'support-18',
            Forest: 'support-19',
            York: 'support-20',
            Feijoa: 'support-21',
        },
        keepAsType: false,
    },
    {
        name: 'TuiTouchMode',
        replaceValues: {
            Transform: 'transform',
            Opacity: 'opacity',
            Background: 'background',
        },
        keepAsType: true,
    },
];
