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
        from: {attrName: 'tuiButtonClose', withTagNames: ['*']},
        to: {attrName: 'tuiButtonX'},
    },
    {
        from: {attrName: '*tuiTextfieldDropdown', withTagNames: ['*']},
        to: {attrName: '*tuiDropdown'},
    },
    {
        from: {attrName: 'tuiTextfield', withTagNames: ['*']},
        to: {attrName: 'tuiInput'},
    },
    {
        from: {attrName: 'tuiDropdownOpen', withTagNames: ['*']},
        to: {attrName: 'tuiDropdownAuto'},
    },
];
