import {type ReplacementAttribute} from '../../../interfaces';

export const ATTRS_TO_REPLACE: readonly ReplacementAttribute[] = [
    {
        from: {
            attrName: 'icon',
            withAttrsNames: ['tuiBadge'],
            filterFn: (element) => element.tagName === 'tui-icon',
        },
        to: {attrName: 'iconStart'},
    },
    {
        from: {
            attrName: '[icon]',
            withAttrsNames: ['tuiBadge'],
            filterFn: (element) => element.tagName === 'tui-icon',
        },
        to: {attrName: '[iconStart]'},
    },
    {
        from: {attrName: 'tuiButtonClose'},
        to: {attrName: 'tuiButtonX'},
    },
    {
        from: {attrName: '*tuiTextfieldDropdown'},
        to: {attrName: '*tuiDropdown'},
    },
];
