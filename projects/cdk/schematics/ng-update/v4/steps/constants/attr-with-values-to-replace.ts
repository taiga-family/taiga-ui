import {hasElementAttribute} from '../../../../utils/templates/elements';
import type {ReplacementAttributeValue} from '../../../interfaces';

const hasPseudo = [
    'button',
    'a',
    'tui-checkbox',
    'tui-checkbox-block',
    'tui-radio',
    'tui-radio-block',
    'tui-radio-labeled',
    'tui-checkbox-labeled',
];

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
        attrNames: ['[pseudoActive]'],
        newAttrName: '[tuiAppearanceState]',
        withTagNames: hasPseudo,
        valueReplacer: (condition) => `${condition} ? 'active' : null`,
        directiveModule: {
            name: 'TuiAppearance',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        attrNames: ['[pseudoFocus]'],
        newAttrName: '[tuiAppearanceState]',
        withTagNames: hasPseudo,
        valueReplacer: (condition) => `${condition} ? 'focus' : null`,
        directiveModule: {
            name: 'TuiAppearance',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        attrNames: ['[pseudoHover]'],
        newAttrName: '[tuiAppearanceState]',
        withTagNames: hasPseudo,
        valueReplacer: (condition) => `${condition} ? 'hover' : null`,
        directiveModule: {
            name: 'TuiAppearance',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        attrNames: ['[pseudoInvalid]'],
        newAttrName: '[tuiAppearanceState]',
        withTagNames: hasPseudo,
        valueReplacer: (condition) => `${condition} ? 'invalid' : null`,
        directiveModule: {
            name: 'TuiAppearance',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        attrNames: ['[pseudoDisabled]'],
        newAttrName: '[tuiAppearanceState]',
        withTagNames: ['tui-radio-block', 'tui-radio-labeled', 'tui-radio'],
        valueReplacer: (condition) => `${condition} ? 'disabled' : null`,
        directiveModule: {
            name: 'TuiAppearance',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
];
