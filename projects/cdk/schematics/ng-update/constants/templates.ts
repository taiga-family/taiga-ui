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
            withTagNames: ['tui-slider'],
        },
        to: {
            attrName: '[step]',
        },
    },
    {
        from: {
            attrName: '*tuiTab',
            withTagNames: ['*'],
        },
        to: {
            attrName: '*tuiItem',
        },
    },
    {
        from: {
            attrName: '*tuiBreadcrumb',
            withTagNames: ['*'],
        },
        to: {
            attrName: '*tuiItem',
        },
    },
    {
        from: {
            attrName: 'tuiToolbarTool',
            withTagNames: ['*'],
        },
        to: {
            attrName: 'tuiItem',
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

export const TEMPLATE_COMMENTS = [
    {
        tag: 'tui-input-slider',
        withAttr: 'pluralize',
        comment:
            '[pluralize] => Use [postfix] instead. See https://taiga-ui.dev/components/input-slider/API?postfix=apples',
    },
    {
        tag: 'tui-input-slider',
        withAttr: 'segmentsPluralize',
        comment:
            'See examples how create labels for ticks without this property (outside the component): https://taiga-ui.dev/components/input-slider#slider-segments',
    },
    {
        tag: 'tui-input-range',
        withAttr: 'segmentsPluralize',
        comment:
            'See examples how create labels for ticks without this property (outside the component): https://taiga-ui.dev/components/input-range#segments',
    },
    {
        tag: 'tui-range',
        withAttr: 'pluralize',
        comment:
            'See examples how create labels for ticks without this property (outside the component): https://taiga-ui.dev/components/range#segments',
    },
] as const;
