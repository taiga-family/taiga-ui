import {hasElementAttribute} from '../../../../utils/templates/elements';
import type {ReplacementAttributeValue} from '../../../interfaces';

const hasPseudoInvalid = [
    'tui-checkbox',
    'tui-checkbox-block',
    'tui-radio',
    'tui-radio-block',
    'tui-radio-labeled',
    'tui-checkbox-labeled',
    'tui-toggle',
];

const hasPseudo = [...hasPseudoInvalid, 'button', 'a'];

export const ATTR_WITH_VALUES_TO_REPLACE: ReplacementAttributeValue[] = [
    {
        attrNames: ['shape'],
        newAttrName: '[style.border-radius.%]',
        valueReplacer: [{from: 'rounded', to: '100'}],
        withTagNames: ['button'],
        filterFn: (el) =>
            hasElementAttribute(el, 'tuiButton') ||
            hasElementAttribute(el, 'tuiIconButton'),
    },
    {
        attrNames: ['tuiMode'],
        newAttrName: 'tuiTheme',
        valueReplacer: [
            {from: 'onDark', to: 'dark'},
            {from: 'onLight', to: 'light'},
        ],
    },
    {
        attrNames: ['tuiHintAppearance'],
        newAttrName: 'tuiHintAppearance',
        valueReplacer: [{from: 'onDark', to: 'dark'}],
    },
    {
        attrNames: ['appearance'],
        newAttrName: 'appearance',
        valueReplacer: [{from: 'secondary-destructive', to: 'destructive'}],
    },
    {
        attrNames: ['[pseudoActive]'],
        newAttrName: '[tuiAppearanceState]',
        withTagNames: hasPseudo,
        valueReplacer: (condition) => `${condition} ? 'active' : null`,
    },
    {
        attrNames: ['[pseudoInvalid]'],
        newAttrName: '[tuiAppearanceMode]',
        withTagNames: hasPseudoInvalid,
        valueReplacer: (condition) => `${condition} ? 'invalid' : null`,
    },
    {
        attrNames: ['[pseudoHover]'],
        newAttrName: '[tuiAppearanceState]',
        withTagNames: hasPseudo,
        valueReplacer: (condition) => `${condition} ? 'hover' : null`,
    },
    {
        attrNames: ['[pseudoDisabled]'],
        newAttrName: '[tuiAppearanceState]',
        withTagNames: ['tui-radio-block', 'tui-radio-labeled', 'tui-radio'],
        valueReplacer: (condition) => `${condition} ? 'disabled' : null`,
    },
];
