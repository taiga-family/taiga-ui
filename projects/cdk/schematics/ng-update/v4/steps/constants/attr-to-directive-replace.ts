import {hasElementAttribute} from '../../../../utils/templates/elements';
import type {ReplacementAttributeToDirective} from '../../../interfaces';

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
        filterFn: el => hasElementAttribute(el, 'tuiLink'),
        inputProperty: 'iconRotated',
        directive: 'tuiChevron',
        directiveModule: {
            name: 'TuiChevron',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        componentSelector: ['button'],
        inputProperty: 'showLoader',
        directive: 'loading',
        directiveModule: {
            name: 'TuiButtonLoadingComponent',
            moduleSpecifier: '@taiga-ui/kit',
        },
        filterFn: el => hasElementAttribute(el, 'tuiButton'),
    },
];
