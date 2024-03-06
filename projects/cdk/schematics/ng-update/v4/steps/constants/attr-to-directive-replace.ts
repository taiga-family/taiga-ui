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
];
