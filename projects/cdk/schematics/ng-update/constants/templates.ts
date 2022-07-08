import {TUI_INTERACTIVE_SELECTORS} from './tui-interactive-selectors';
import {Element} from 'parse5';
import {hasElementAttribute} from '../../utils/templates/elements';

export interface ReplacementAttributes {
    readonly from: {
        readonly attrName: string;
        readonly withTagNames?: string[];
        readonly withAttrsNames?: string[];
        readonly filterFn?: (element: Element) => boolean;
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
    readonly filterFn?: (element: Element) => boolean;
    readonly inputProperty: string;
    readonly directive: string;
    readonly directiveModule: {
        readonly name: string;
        readonly moduleSpecifier: string;
    };
}

export interface InputToRemove {
    readonly inputName: string;
    readonly tags: string[];
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
];

export const INPUTS_TO_REMOVE: InputToRemove[] = [
    {
        inputName: 'iconAlign',
        tags: ['tui-input', 'tui-primitive-textfield', 'tui-input-tag'],
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
        componentSelector: 'tui-input',
        inputProperty: 'icon',
        directive: 'tuiTextfieldIcon',
        directiveModule: {
            name: 'TuiTextfieldControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        filterFn: element =>
            element.attrs.find(attr => attr.name === 'iconalign')?.value === 'right',
    },
    {
        componentSelector: 'tui-input',
        inputProperty: 'icon',
        directive: 'tuiTextfieldIconLeft',
        directiveModule: {
            name: 'TuiTextfieldControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        filterFn: element =>
            !hasElementAttribute(element, 'iconAlign') ||
            element.attrs.find(attr => attr.name === 'iconalign')?.value === 'left',
    },
    {
        componentSelector: 'tui-primitive-textfield',
        inputProperty: 'iconContent',
        directive: 'tuiTextfieldIcon',
        directiveModule: {
            name: 'TuiTextfieldControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        filterFn: element =>
            !hasElementAttribute(element, 'iconAlign') ||
            element.attrs.find(attr => attr.name === 'iconalign')?.value === 'right',
    },
    {
        componentSelector: 'tui-primitive-textfield',
        inputProperty: 'iconContent',
        directive: 'tuiTextfieldIconLeft',
        directiveModule: {
            name: 'TuiTextfieldControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        filterFn: element =>
            element.attrs.find(attr => attr.name === 'iconalign')?.value === 'left',
    },
    {
        componentSelector: 'tui-input-tag',
        inputProperty: 'icon',
        directive: 'tuiTextfieldIcon',
        directiveModule: {
            name: 'TuiTextfieldControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        filterFn: element =>
            !hasElementAttribute(element, 'iconAlign') ||
            element.attrs.find(attr => attr.name === 'iconalign')?.value === 'right',
    },
    {
        componentSelector: 'tui-input-tag',
        inputProperty: 'icon',
        directive: 'tuiTextfieldIconLeft',
        directiveModule: {
            name: 'TuiTextfieldControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        filterFn: element =>
            element.attrs.find(attr => attr.name === 'iconalign')?.value === 'left',
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
    {
        tag: 'tui-preview-host',
        withAttr: 'ngProjectAs',
        comment:
            '"Preview"-component no longer needs it and requires only import of TuiPreviewModule to the main module. See "Setup"-section: https://taiga-ui.dev/components/preview/Setup',
    },
    {
        tag: 'tui-progress',
        withAttr: 'value',
        comment:
            'This legacy component was replaced by 3 new ones (https://taiga-ui.dev/components/progress-bar | https://taiga-ui.dev/components/progress-circle | https://taiga-ui.dev/components/progress-segmented ) ',
    },
] as const;
