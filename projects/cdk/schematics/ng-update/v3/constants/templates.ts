import {hasElementAttribute} from '../../../utils/templates/elements';
import {ReplaceableAttribute} from '../../interfaces/replaceable-attribute';
import {AttributeToDirective} from '../interfaces/attribute-to-directive';
import {RemovableInput} from '../interfaces/removable-input';
import {ReplaceableAttributeValue} from '../interfaces/replaceable-attribute-value';
import {ReplaceableTag} from '../interfaces/replaceable-tag';
import {TUI_INTERACTIVE_SELECTORS} from './tui-interactive-selectors';

export const ATTRS_TO_REPLACE: ReplaceableAttribute[] = [
    {
        from: {attrName: `tuiResizableColumn`, withAttrsNames: [`tuiResizableColumn`]},
        to: {attrName: `tuiTh [resizable]="true"`},
    },
    {
        from: {
            attrName: `new`,
            withTagNames: [
                `tui-editor`,
                `tui-range`,
                `tui-input-range`,
                `tui-input-slider`,
                `tui-feed-item`,
            ],
        },
        to: {attrName: ``},
    },
    {
        from: {
            attrName: `[hovered]`,
            withTagNames: [`tui-wrapper`],
            withAttrsNames: [`tuiWrapper`],
        },
        to: {
            attrName: `[hover]`,
        },
    },
    {
        from: {
            attrName: `[pressed]`,
            withTagNames: [`tui-wrapper`],
            withAttrsNames: [`tuiWrapper`],
        },
        to: {
            attrName: `[active]`,
        },
    },
    {
        from: {
            attrName: `[label]`,
            withAttrsNames: [`tuiLabel`],
        },

        to: {
            attrName: `[tuiLabel]`,
        },
    },
    {
        from: {
            attrName: `label`,
            withAttrsNames: [`tuiLabel`],
        },

        to: {
            attrName: `tuiLabel`,
        },
    },
    {
        from: {
            attrName: `[state]`,
            withAttrsNames: [`tuiStep`],
        },

        to: {
            attrName: `[stepState]`,
        },
    },
    {
        from: {
            attrName: `state`,
            withAttrsNames: [`tuiStep`],
        },

        to: {
            attrName: `stepState`,
        },
    },
    {
        from: {
            attrName: `[focused]`,
            withTagNames: [`tui-wrapper`],
            withAttrsNames: [`tuiWrapper`],
        },
        to: {
            attrName: `[focus]`,
        },
    },
    {
        from: {
            attrName: `[pseudoPressed]`,
            withTagNames: TUI_INTERACTIVE_SELECTORS,
        },
        to: {
            attrName: `[pseudoActive]`,
        },
    },
    {
        from: {
            attrName: `[pseudoHovered]`,
            withTagNames: TUI_INTERACTIVE_SELECTORS,
        },
        to: {
            attrName: `[pseudoHover]`,
        },
    },
    {
        from: {
            attrName: `[pseudoFocused]`,
            withTagNames: TUI_INTERACTIVE_SELECTORS,
        },
        to: {
            attrName: `[pseudoFocus]`,
        },
    },
    {
        from: {
            attrName: `[pseudoHovered]`,
            withAttrsNames: [`tuiButton`, `tuiIconButton`],
        },
        to: {
            attrName: `[pseudoHover]`,
        },
    },
    {
        from: {
            attrName: `[pseudoFocused]`,
            withAttrsNames: [`tuiButton`, `tuiIconButton`],
        },
        to: {
            attrName: `[pseudoFocus]`,
        },
    },
    {
        from: {
            attrName: `[pseudoPressed]`,
            withAttrsNames: [`tuiButton`, `tuiIconButton`],
        },
        to: {
            attrName: `[pseudoActive]`,
        },
    },
    {
        from: {
            attrName: `(rangeChange)`,
            withTagNames: [`tui-calendar-range`],
        },
        to: {
            attrName: `(valueChange)`,
        },
    },
    {
        from: {
            attrName: `[quantum]`,
            withAttrsNames: [`tuiSlider`],
            withTagNames: [`tui-slider`],
        },
        to: {
            attrName: `[step]`,
        },
    },
    {
        from: {
            attrName: `[quantum]`,
            withTagNames: [`tui-range`],
        },
        to: {
            attrName: `[step]`,
        },
    },
    {
        from: {
            attrName: `*tuiTab`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `*tuiItem`,
        },
    },
    {
        from: {
            attrName: `*tuiBreadcrumb`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `*tuiItem`,
        },
    },
    {
        from: {
            attrName: `tuiToolbarTool`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `tuiItem`,
        },
    },
    {
        from: {
            attrName: `tuiManualHint`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `tuiHint`,
        },
    },
    {
        from: {
            attrName: `[tuiManualHint]`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `[tuiHint]`,
        },
    },
    {
        from: {
            attrName: `[tuiManualHintShow]`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `[tuiHintManual]`,
        },
    },
    {
        from: {
            attrName: `[tuiPointerHint]`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `tuiHintPointer [tuiHint]`,
        },
    },
    {
        from: {
            attrName: `tuiPointerHint`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `tuiHintPointer tuiHint`,
        },
    },
    {
        from: {
            attrName: `messageMode`,
            withTagNames: [`tui-input-copy`],
        },
        to: {
            attrName: `messageAppearance`,
        },
    },
    {
        from: {
            attrName: `[messageMode]`,
            withTagNames: [`tui-input-copy`],
        },
        to: {
            attrName: `[messageAppearance]`,
        },
    },
    {
        from: {
            attrName: `[hintMode]`,
            withTagNames: [`tui-bar-chart`],
        },
        to: {
            attrName: `[tuiHintAppearance]`,
        },
    },
    {
        from: {
            attrName: `tuiHintMode`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `tuiHintAppearance`,
        },
    },
    {
        from: {
            attrName: `[tuiHintMode]`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `[tuiHintAppearance]`,
        },
    },
    {
        from: {
            attrName: `mode`,
            withTagNames: [`tui-tooltip`],
        },
        to: {
            attrName: `appearance`,
        },
    },
    {
        from: {
            attrName: `[mode]`,
            withTagNames: [`tui-tooltip`],
        },
        to: {
            attrName: `[appearance]`,
        },
    },
    {
        from: {
            attrName: `[itemLabel]`,
            withTagNames: [`tui-feed-item`],
        },
        to: {
            attrName: `[description]`,
        },
    },
    {
        from: {
            attrName: `[itemValue]`,
            withTagNames: [`tui-feed-item`],
        },
        to: {
            attrName: `[title]`,
        },
    },
    {
        from: {
            attrName: `[sumLabel]`,
            withTagNames: [`tui-feed-item`],
        },
        to: {
            attrName: `[secondaryDescription]`,
        },
    },
    {
        from: {
            attrName: `[sumValue]`,
            withTagNames: [`tui-feed-item`],
        },
        to: {
            attrName: `[secondaryTitle]`,
        },
    },
    {
        from: {
            attrName: `tuiDropdown`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `tuiDropdownManual`,
        },
    },
    {
        from: {
            attrName: `[tuiDropdown]`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `[tuiDropdownManual]`,
        },
    },
    {
        from: {
            attrName: `tuiDropdownContent`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `tuiDropdown`,
        },
    },
    {
        from: {
            attrName: `[tuiDropdownContent]`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `[tuiDropdown]`,
        },
    },
    {
        from: {
            attrName: `tuiDropdownContext`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `tuiDropdownContext tuiDropdown`,
        },
    },
    {
        from: {
            attrName: `[tuiDropdownContext]`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `tuiDropdownContext [tuiDropdown]`,
        },
    },
    {
        from: {
            attrName: `tuiTextfieldExampleText`,
            withTagNames: [`tui-input-tag`, `tui-multi-select`],
        },
        to: {
            attrName: `placeholder`,
        },
    },
    {
        from: {
            attrName: `tuiTextfieldMaxLength`,
            withTagNames: [`tui-input-tag`, `tui-text-area`],
        },
        to: {
            attrName: `maxLength`,
        },
    },
    {
        from: {
            attrName: `[tuiTextfieldExampleText]`,
            withTagNames: [`tui-input-tag`, `tui-multi-select`],
        },
        to: {
            attrName: `[placeholder]`,
        },
    },
    {
        from: {
            attrName: `[tuiTextfieldMaxLength]`,
            withTagNames: [`tui-input-tag`, `tui-text-area`],
        },
        to: {
            attrName: `[maxLength]`,
        },
    },
    {
        from: {
            attrName: `[tuiHintId]`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `[tuiHintDescribe]`,
        },
    },
    {
        from: {
            attrName: `tuiHintId`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `tuiHintDescribe`,
        },
    },
    {
        from: {
            attrName: `[tuiDescribedBy]`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `[id]`,
        },
    },
    {
        from: {
            attrName: `tuiDescribedBy`,
            withTagNames: [`*`],
        },
        to: {
            attrName: `id`,
        },
    },
    {
        from: {
            attrName: `[tuiDropdownSided]`,
            withTagNames: [`tui-hosted-dropdown`],
        },
        to: {
            attrName: `[sided]`,
        },
    },
    {
        from: {
            attrName: `tuiDropdownSided`,
            withTagNames: [`tui-hosted-dropdown`],
        },
        to: {
            attrName: `[sided]="true"`,
        },
    },
];

export const INPUTS_TO_REMOVE: RemovableInput[] = [
    {
        inputName: `iconAlign`,
        tags: [`tui-input`, `tui-primitive-textfield`, `tui-input-tag`],
    },
    {
        inputName: `tuiLabel`,
        tags: [`label`],
    },
];

export const TAGS_TO_REPLACE: ReplaceableTag[] = [
    {
        from: `tui-group`,
        to: `div`,
        addAttributes: [`tuiGroup`],
    },
    {
        from: `tui-wrapper`,
        to: `div`,
        addAttributes: [`tuiWrapper`],
    },
    {
        from: `tui-slider`,
        to: `input`,
        addAttributes: [`tuiSlider`, `type="range"`],
    },
    {
        from: `tui-action`,
        to: `button`,
        addAttributes: [`tuiAction`],
    },
];

export const ATTR_TO_DIRECTIVE: AttributeToDirective[] = [
    {
        componentSelector: `tui-primitive-textfield`,
        inputProperty: `(autofilledChange)`,
        directive: `(tuiAutofilledChange)`,
        directiveModule: {
            name: `TuiAutofilledModule`,
            moduleSpecifier: `@taiga-ui/cdk`,
        },
    },
    {
        componentSelector: TUI_INTERACTIVE_SELECTORS,
        inputProperty: `(pressedChange)`,
        directive: `(tuiPressedChange)`,
        directiveModule: {
            name: `TuiPressedModule`,
            moduleSpecifier: `@taiga-ui/cdk`,
        },
    },
    {
        componentSelector: TUI_INTERACTIVE_SELECTORS,
        inputProperty: `(hoveredChange)`,
        directive: `(tuiHoveredChange)`,
        directiveModule: {
            name: `TuiHoveredModule`,
            moduleSpecifier: `@taiga-ui/cdk`,
        },
    },
    {
        componentSelector: `tui-input-slider`,
        inputProperty: `size`,
        directive: `tuiTextfieldSize`,
        directiveModule: {
            name: `TuiTextfieldControllerModule`,
            moduleSpecifier: `@taiga-ui/core`,
        },
    },
    {
        componentSelector: `tui-input-slider`,
        inputProperty: `secondary`,
        directive: `tuiTextfieldCustomContent`,
        directiveModule: {
            name: `TuiTextfieldControllerModule`,
            moduleSpecifier: `@taiga-ui/core`,
        },
    },
    {
        componentSelector: `tui-input-range`,
        inputProperty: `size`,
        directive: `tuiTextfieldSize`,
        directiveModule: {
            name: `TuiTextfieldControllerModule`,
            moduleSpecifier: `@taiga-ui/core`,
        },
    },
    {
        componentSelector: `tui-input`,
        inputProperty: `icon`,
        directive: `tuiTextfieldIcon`,
        directiveModule: {
            name: `TuiTextfieldControllerModule`,
            moduleSpecifier: `@taiga-ui/core`,
        },
        filterFn: element =>
            element.attrs.find(attr => attr.name === `iconalign`)?.value === `right`,
    },
    {
        componentSelector: `tui-input`,
        inputProperty: `icon`,
        directive: `tuiTextfieldIconLeft`,
        directiveModule: {
            name: `TuiTextfieldControllerModule`,
            moduleSpecifier: `@taiga-ui/core`,
        },
        filterFn: element =>
            !hasElementAttribute(element, `iconAlign`) ||
            element.attrs.find(attr => attr.name === `iconalign`)?.value === `left`,
    },
    {
        componentSelector: `tui-primitive-textfield`,
        inputProperty: `iconContent`,
        directive: `tuiTextfieldIcon`,
        directiveModule: {
            name: `TuiTextfieldControllerModule`,
            moduleSpecifier: `@taiga-ui/core`,
        },
        filterFn: element =>
            !hasElementAttribute(element, `iconAlign`) ||
            element.attrs.find(attr => attr.name === `iconalign`)?.value === `right`,
    },
    {
        componentSelector: `tui-primitive-textfield`,
        inputProperty: `iconContent`,
        directive: `tuiTextfieldIconLeft`,
        directiveModule: {
            name: `TuiTextfieldControllerModule`,
            moduleSpecifier: `@taiga-ui/core`,
        },
        filterFn: element =>
            element.attrs.find(attr => attr.name === `iconalign`)?.value === `left`,
    },
    {
        componentSelector: `tui-input-tag`,
        inputProperty: `icon`,
        directive: `tuiTextfieldIcon`,
        directiveModule: {
            name: `TuiTextfieldControllerModule`,
            moduleSpecifier: `@taiga-ui/core`,
        },
        filterFn: element =>
            !hasElementAttribute(element, `iconAlign`) ||
            element.attrs.find(attr => attr.name === `iconalign`)?.value === `right`,
    },
    {
        componentSelector: `tui-input-tag`,
        inputProperty: `icon`,
        directive: `tuiTextfieldIconLeft`,
        directiveModule: {
            name: `TuiTextfieldControllerModule`,
            moduleSpecifier: `@taiga-ui/core`,
        },
        filterFn: element =>
            element.attrs.find(attr => attr.name === `iconalign`)?.value === `left`,
    },
    {
        componentSelector: `*`,
        inputProperty: `scrollIntoView`,
        directive: `tuiScrollIntoViewLink`,
        directiveModule: {
            name: `TuiScrollIntoViewLinkModule`,
            moduleSpecifier: `@taiga-ui/addon-doc`,
        },
    },
    {
        componentSelector: [`tui-bar-chart`, `tui-pie-chart`, `tui-line-chart`],
        inputProperty: `hintContent`,
        directive: `tuiHintContent`,
        directiveModule: {
            name: `TuiHintControllerModule`,
            moduleSpecifier: `@taiga-ui/core`,
        },
    },
];

/**
 * @example `<div [someDirective]="true" />` => `<div someDirective />`
 *
 * Keeping it for future sake
 */
export const TRUTHY_BOOLEAN_INPUT_TO_HTML_BINARY_ATTRIBUTE: readonly string[] = [];

export const TEMPLATE_COMMENTS = [
    {
        tag: `tui-input-slider`,
        withAttr: `pluralize`,
        comment: `[pluralize] => Use [postfix] instead. See https://taiga-ui.dev/components/input-slider/API?postfix=apples`,
    },
    {
        tag: `tui-input-slider`,
        withAttr: `segmentsPluralize`,
        comment: `See examples how create labels for ticks without this property (outside the component): https://taiga-ui.dev/components/input-slider#slider-segments`,
    },
    {
        tag: `tui-input-range`,
        withAttr: `segmentsPluralize`,
        comment: `See examples how create labels for ticks without this property (outside the component): https://taiga-ui.dev/components/input-range#segments`,
    },
    {
        tag: `tui-range`,
        withAttr: `pluralize`,
        comment: `See examples how create labels for ticks without this property (outside the component): https://taiga-ui.dev/components/range#segments`,
    },
    {
        tag: `tui-range`,
        withAttr: `steps`,
        comment: `This component has new API. Use property [step] instead. See: https://taiga-ui.dev/components/range/API`,
    },
    {
        tag: `tui-preview-host`,
        withAttr: `ngProjectAs`,
        comment: `"Preview"-component no longer needs it and requires only import of TuiPreviewModule to the main module. See "Setup"-section: https://taiga-ui.dev/components/preview/Setup`,
    },
    {
        tag: `tui-progress`,
        withAttr: `value`,
        comment: `This legacy component was replaced by 3 new ones (https://taiga-ui.dev/components/progress-bar | https://taiga-ui.dev/components/progress-circle | https://taiga-ui.dev/components/progress-segmented ) `,
    },
    {
        tag: `tui-input-file`,
        withAttr: `loadingFiles`,
        comment: `This legacy component was replaced by new one (https://taiga-ui.dev/components/input-files) `,
    },
    {
        tag: `tui-input-tag`,
        withAttr: `allowSpaces`,
        comment: `Use property [separator] to forbid spaces. See example: https://taiga-ui.dev/components/input-tag#no-spaces-inside-tags`,
    },
    {
        tag: `tui-preview-pagination`,
        withAttr: `lastIndex`,
        comment: `Use property [length] instead. See example: https://taiga-ui.dev/components/preview`,
    },
] as const;

export const REPLACE_ATTR_VALUE: ReplaceableAttributeValue[] = [
    {
        attrNames: [`tuiHintDirection`],
        values: [
            {from: `bottom-middle`, to: `bottom`},
            {from: `top-middle`, to: `top`},
        ],
    },
    {
        attrNames: [`ngProjectAs`],
        values: [{from: `tuiOverNotifications`, to: `tuiOverAlerts`}],
    },
    {
        attrNames: [`direction`],
        withTagNames: [`tui-tooltip`],
        values: [
            {from: `bottom-middle`, to: `bottom`},
            {from: `top-middle`, to: `top`},
        ],
    },
];
