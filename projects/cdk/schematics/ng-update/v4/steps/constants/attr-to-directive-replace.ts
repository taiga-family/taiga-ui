import {hasElementAttribute} from '../../../../utils/templates/elements';
import {type ReplacementAttributeToDirective} from '../../../interfaces';

export const ATTRS_TO_DIRECTIVE_REPLACE: ReplacementAttributeToDirective[] = [
    {
        componentSelector: [
            'tui-primitive-textfield',
            'tui-input-number',
            'tui-input-slider',
        ],
        inputProperty: 'prefix',
        directive: 'tuiTextfieldPrefix',
        directiveModule: {
            name: 'TuiTextfieldControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        componentSelector: [
            'tui-primitive-textfield',
            'tui-input-number',
            'tui-input-slider',
            'tui-input-time',
        ],
        inputProperty: 'postfix',
        directive: 'tuiTextfieldPostfix',
        directiveModule: {
            name: 'TuiTextfieldControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        componentSelector: ['tui-primitive-textfield'],
        inputProperty: 'filler',
        directive: 'tuiTextfieldFiller',
        directiveModule: {
            name: 'TuiTextfieldControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        componentSelector: ['a', 'button'],
        filterFn: (el) => hasElementAttribute(el, 'tuiLink'),
        inputProperty: 'iconRotated',
        directive: 'tuiChevron',
        directiveModule: {
            name: 'TuiChevron',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        componentSelector: ['button', 'a'],
        inputProperty: 'showLoader',
        directive: 'loading',
        directiveModule: {
            name: 'TuiButtonLoading',
            moduleSpecifier: '@taiga-ui/kit',
        },
        filterFn: (el) =>
            hasElementAttribute(el, 'tuiButton') ||
            hasElementAttribute(el, 'tuiIconButton'),
    },
    {
        componentSelector: ['*'],
        inputProperty: 'pseudoFocus',
        directive: 'tuiAppearanceFocus',
        directiveModule: {
            name: 'TuiAppearance',
            moduleSpecifier: '@taiga-ui/core',
        },
        filterFn: (el) => !['tui-primitive-textfield'].includes(el.tagName),
    },
];
