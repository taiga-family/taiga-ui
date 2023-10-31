import {ReplacementAttribute} from '../../../interfaces';

export const ATTRS_TO_REPLACE: ReplacementAttribute[] = [
    {
        from: {
            attrName: `brandLogo`,
            withTagNames: [`tui-card`, `tui-thumbnail-card`],
        },
        to: {attrName: `iconLeft`},
    },
    {
        from: {
            attrName: `[brandLogo]`,
            withTagNames: [`tui-card`, `tui-thumbnail-card`],
        },
        to: {attrName: `[iconLeft]`},
    },
    {
        from: {
            attrName: `[status]`,
            withTagNames: [`tui-badge`],
        },
        to: {attrName: `[appearance]`},
    },
    {
        from: {
            attrName: `status`,
            withTagNames: [`tui-badge`],
        },
        to: {attrName: `appearance`},
    },
];
