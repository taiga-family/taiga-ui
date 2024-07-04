import {hasElementAttribute} from '../../../../utils/templates/elements';
import type {ReplacementAttributeValue} from '../../../interfaces';

export const ATTR_WITH_VALUES_TO_REPLACE: ReplacementAttributeValue[] = [
    {
        attrNames: ['shape'],
        newAttrName: '[style.border-radius.%]',
        values: [{from: 'rounded', to: '100'}],
        withTagNames: ['button'],
        filterFn: (el) => hasElementAttribute(el, 'tuiButton'),
    },
    {
        attrNames: ['tuiMode'],
        newAttrName: 'tuiTheme',
        values: [
            {from: 'onDark', to: 'dark'},
            {from: 'onLight', to: 'light'},
        ],
    },
];
