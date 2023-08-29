import {ReplacementEnum} from '../../interfaces/replacement-enum';

export const ENUMS_TO_REPLACE: ReplacementEnum[] = [
    {
        name: `TuiPaymentSystem`,
        keepAsType: true,
        replaceValues: {
            Electron: `electron`,
            Maestro: `maestro`,
            Mastercard: `mastercard`,
            Mir: `mir`,
            Visa: `visa`,
        },
    },
    {
        name: `TuiTextAlign`,
        keepAsType: false,
        replaceValues: {
            Center: `center`,
            Left: `left`,
            Right: `right`,
        },
    },
    {
        name: `TuiLineType`,
        replaceValues: {
            Dashed: `dashed`,
            Dotted: `dotted`,
            Hidden: `hidden`,
            None: `none`,
            Solid: `solid`,
        },
    },
    {
        name: `TuiMoneySign`,
        replaceValues: {
            Always: `always`,
            ForceNegative: `force-negative`,
            ForcePositive: `force-positive`,
            NegativeOnly: `negative-only`,
            Never: `never`,
        },
    },
    {
        name: `TuiDecimal`,
        replaceValues: {
            Always: `always`,
            Never: `never`,
            NotZero: `not-zero`,
        },
    },
    {
        name: `TuiInputType`,
        replaceValues: {
            Email: `email`,
            Password: `password`,
            Tel: `tel`,
            Text: `text`,
            Url: `url`,
        },
    },
    {
        name: `TuiOverscrollMode`,
        replaceValues: {
            All: `all`,
            None: `none`,
            Scroll: `scroll`,
        },
    },
    {
        name: `TuiInputMode`,
        replaceValues: {
            Decimal: `decimal`,
            Email: `email`,
            None: `none`,
            Numeric: `numeric`,
            Search: `search`,
            Tel: `tel`,
            Text: `text`,
            Url: `url`,
        },
    },
    {
        name: `TuiStepState`,
        keepAsType: true,
        replaceValues: {
            Error: `error`,
            Normal: `normal`,
            Pass: `pass`,
        },
    },
    {
        name: `TuiStatus`,
        keepAsType: true,
        replaceValues: {
            Custom: `custom`,
            Default: `default`,
            Error: `error`,
            Primary: `primary`,
            Success: `success`,
            Warning: `warning`,
        },
    },
    {
        name: `TuiMarkerIconMode`,
        keepAsType: true,
        replaceValues: {
            Error: `error`,
            Link: `link`,
            OnDark: `onDark`,
            Primary: `primary`,
            Secondary: `secondary`,
            Success: `success`,
            Warning: `warning`,
            White: `white`,
        },
    },
    {
        name: `TuiDropdownPosition`,
        keepAsType: true,
        replaceValues: {
            Selection: `selection`,
            Tag: `tag`,
            Word: `word`,
        },
    },
    {
        name: `TuiBorders`,
        keepAsType: false,
        replaceValues: {
            All: `all`,
            TopBottom: `top-bottom`,
        },
    },
    {
        name: `TuiButtonShape`,
        replaceValues: {
            Rounded: `rounded`,
            Square: `square`,
        },
    },
    {
        name: `TuiDropdownWidth`,
        replaceValues: {
            Auto: `auto`,
            Fixed: `fixed`,
            Min: `min`,
        },
    },
    {
        name: `TuiHintMode`,
        replaceValues: {
            Error: `error`,
            OnDark: `onDark`,
            Overflow: `overflow`,
        },
    },
    {
        name: `TuiLinkMode`,
        keepAsType: false,
        replaceValues: {
            Negative: `negative`,
            Positive: `positive`,
        },
    },
    {
        name: `TuiOrientation`,
        replaceValues: {
            Horizontal: `horizontal`,
            Vertical: `vertical`,
        },
    },
    {
        name: `TuiSupportColor`,
        keepAsType: false,
        replaceValues: {
            // cspell:disable-next-line
            Amethist: `support-09`,
            Bay: `support-18`,
            Bittersweet: `support-06`,
            Charm: `support-08`,
            // cspell:disable-next-line
            Feijoa: `support-21`,
            Forest: `support-19`,
            Fountain: `support-16`,
            Havelock: `support-13`,
            Helio: `support-10`,
            Lilac: `support-11`,
            Malibu: `support-12`,
            Mint: `support-15`,
            Mustard: `support-01`,
            // cspell:disable-next-line
            Picton: `support-14`,
            Pinkie: `support-07`,
            // cspell:disable-next-line
            Puertorico: `support-17`,
            Salmon: `support-04`,
            Sienna: `support-05`,
            Tan: `support-03`,
            Texas: `support-02`,
            York: `support-20`,
        },
    },
    {
        name: `TuiTouchMode`,
        keepAsType: true,
        replaceValues: {
            Background: `background`,
            Opacity: `opacity`,
            Transform: `transform`,
        },
    },
    {
        name: `TuiCreditCardAutofillName`,
        replaceValues: {
            CcCsc: `cc-csc`,
            CcExp: `cc-exp`,
            CcExpMonth: `cc-exp-month`,
            CcExpYear: `cc-exp-year`,
            CcName: `cc-name`,
            CcNumber: `cc-number`,
            CcType: `cc-type`,
            Off: `off`,
        },
    },
    {
        name: `TuiNameAutofillName`,
        replaceValues: {
            AdditionalName: `additional-name`,
            FamilyName: `family-name`,
            GivenName: `given-name`,
            Name: `name`,
            Off: `off`,
        },
    },
    {
        name: `TuiAccountAutofillName`,
        replaceValues: {
            CurrentPassword: `current-password`,
            NewPassword: `new-password`,
            Off: `off`,
            Username: `username`,
        },
    },
    {
        name: `TuiEmailAutofillName`,
        replaceValues: {
            Email: `email`,
            Off: `off`,
        },
    },
    {
        name: `TuiAddressAutofillName`,
        replaceValues: {
            CountryName: `country-name`,
            Off: `off`,
            PostalCode: `postal-code`,
            StreetAddress: `street-address`,
        },
    },
    {
        name: `TuiPhoneAutofillName`,
        replaceValues: {
            Off: `off`,
            Tel: `tel`,
        },
    },
    {
        name: `TuiDateAutofillName`,
        replaceValues: {
            Bday: `bday`,
            Off: `off`,
        },
    },
    {
        name: `TuiTransactionAutofillName`,
        replaceValues: {
            Off: `off`,
            TransactionAmount: `transaction-amount`,
            TransactionCurrency: `transaction-currency`,
        },
    },
];
