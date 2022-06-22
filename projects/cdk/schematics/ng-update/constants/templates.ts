import {TUI_INTERACTIVE_SELECTORS} from './tui-interactive-selectors';

export interface ReplacementAttributes {
    readonly from: {
        readonly attrName: string;
        readonly withTagNames?: string[];
        readonly withAttrsNames?: string[];
    };
    readonly to: {
        readonly attrName: string;
    };
}

export interface ReplacementTags {
    readonly from: string;
    readonly to: string;
    readonly addAttributes: string[];
}

export interface AttributeToDirective {
    readonly componentSelector: string | string[];
    readonly inputProperty: string;
    readonly directive: string;
    readonly directiveModule: {
        readonly name: string;
        readonly moduleSpecifier: string;
    };
}

export const ATTRS_TO_REPLACE: ReplacementAttributes[] = [
    {
        from: {attrName: 'tuiResizableColumn', withAttrsNames: ['tuiResizableColumn']},
        to: {attrName: 'tuiTh [resizable]="true"'},
    },
    {
        from: {
            attrName: 'new',
            withTagNames: [
                'tui-editor',
                'tui-range',
                'tui-input-range',
                'tui-input-slider',
            ],
        },
        to: {attrName: ''},
    },
    {
        from: {
            attrName: '[hovered]',
            withTagNames: ['tui-wrapper'],
            withAttrsNames: ['tuiWrapper'],
        },
        to: {
            attrName: '[hover]',
        },
    },
    {
        from: {
            attrName: '[pressed]',
            withTagNames: ['tui-wrapper'],
            withAttrsNames: ['tuiWrapper'],
        },
        to: {
            attrName: '[active]',
        },
    },
    {
        from: {
            attrName: '(rangeChange)',
            withTagNames: ['tui-calendar-range'],
        },
        to: {
            attrName: '(valueChange)',
        },
    },
    {
        from: {
            attrName: '[quantum]',
            withAttrsNames: ['tuiSlider'],
        },
        to: {
            attrName: '[step]',
        },
    },
];

export const TAGS_TO_REPLACE: ReplacementTags[] = [
    {
        from: 'tui-group',
        to: 'div',
        addAttributes: ['tuiGroup'],
    },
    {
        from: 'tui-wrapper',
        to: 'div',
        addAttributes: ['tuiWrapper'],
    },
    {
        from: 'tui-slider',
        to: 'input',
        addAttributes: ['tuiSlider', 'type="range"'],
    },
];

export const ATTR_TO_DIRECTIVE: AttributeToDirective[] = [
    {
        componentSelector: 'tui-primitive-textfield',
        inputProperty: '(autofilledChange)',
        directive: '(tuiAutofilledChange)',
        directiveModule: {
            name: 'TuiAutofilledModule',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        componentSelector: TUI_INTERACTIVE_SELECTORS,
        inputProperty: '(pressedChange)',
        directive: '(tuiPressedChange)',
        directiveModule: {
            name: 'TuiPressedModule',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        componentSelector: TUI_INTERACTIVE_SELECTORS,
        inputProperty: '(hoveredChange)',
        directive: '(tuiHoveredChange)',
        directiveModule: {
            name: 'TuiHoveredModule',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        componentSelector: 'tui-input-slider',
        inputProperty: 'size',
        directive: 'tuiTextfieldSize',
        directiveModule: {
            name: 'TuiTextfieldControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        componentSelector: 'tui-input-slider',
        inputProperty: 'secondary',
        directive: 'tuiTextfieldCustomContent',
        directiveModule: {
            name: 'TuiTextfieldControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        componentSelector: 'tui-input-range',
        inputProperty: 'size',
        directive: 'tuiTextfieldSize',
        directiveModule: {
            name: 'TuiTextfieldControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        componentSelector: '*',
        inputProperty: 'scrollIntoView',
        directive: 'tuiScrollIntoViewLink',
        directiveModule: {
            name: 'TuiScrollIntoViewLinkModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
];
