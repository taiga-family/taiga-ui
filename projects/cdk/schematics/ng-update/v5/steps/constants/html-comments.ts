import {
    hasElementAttribute,
    hasElementAttributeWithValue,
} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {type HtmlComment} from '../../../interfaces';
import {hasChild} from '../../../utils/templates/dom-traversal';
import {TUI_THICKNESS_COMMENT} from '../migrate-css-variables';

const STRING_LITERAL_RE = /^'[^']*'$/;

export const HTML_COMMENTS: HtmlComment[] = [
    {
        tag: '*',
        withAttrs: ['[appearance]'],
        filterFn: (element) => {
            const value = findAttr(element.attrs, '[appearance]')?.value?.trim();

            if (!value) {
                return false;
            }

            const alreadyMigrated =
                value.includes('positive') || value.includes('negative');

            return !STRING_LITERAL_RE.test(value) && !alreadyMigrated;
        },
        comment:
            '[appearance] binding uses a dynamic expression. If it can produce "error"/"success"/"glass", replace with "negative"/"positive"/"secondary-grayscale"',
    },
    {
        tag: 'input',
        withAttrs: ['keySteps'],
        filterFn: (element) => hasElementAttribute(element, 'max'),
        comment:
            'dont use [max] property with [keySteps] – use [step]. When [keySteps] property is enabled, [step] means percentage of total track length. Learn more: https://taiga-ui.dev/next/components/slider#key-steps',
    },
    {
        tag: 'tui-range',
        withAttrs: ['(activeThumbChange)'],
        comment:
            '(activeThumbChange) emits "start"/"end" instead of "left"/"right". Adjust your code accordingly',
    },
    {
        tag: 'tui-accordion-item',
        withAttrs: [],
        comment:
            'tui-accordion-item has been removed. Use new tuiAccordion instead. See example https://taiga-ui.dev/components/accordion',
    },
    {
        tag: 'tui-accordion',
        filterFn: (element) => hasChild(element, 'tui-accordion-item'),
        withAttrs: [],
        comment:
            'tui-accordion-item has been removed. Use new tuiAccordion instead. See example https://taiga-ui.dev/components/accordion',
    },
    {
        tag: '*',
        withAttrs: [
            '[style.--tui-thickness.rem]',
            '[style.--tui-thickness.px]',
            '[style.--tui-thickness]',
        ],
        comment: TUI_THICKNESS_COMMENT,
    },
    {
        tag: 'tui-pagination',
        filterFn: (el) => hasElementAttributeWithValue(el, 'size', 's'),
        withAttrs: ['size'],
        comment: 'use tui-pager instead',
    },
    {
        tag: 'tui-accordion',
        withAttrs: ['rounded'],
        comment:
            'rounded input has been removed. The previous rounded look can still be achieved with CSS. See example https://taiga-ui.dev/components/accordion#custom',
    },
    {
        tag: 'timeline-steps',
        withAttrs: [],
        comment:
            'timeline-steps has been removed. Use TuiStepper instead. See example https://taiga-ui.dev/navigation/stepper',
    },
    {
        tag: '*',
        withAttrs: ['[directionOrder]', '(directionOrderChange)', '[(directionOrder)]'],
        comment:
            'tuiDirectionOrder removed. Update types: TuiSortDirection (1 | -1) instead of "asc" | "desc"',
    },
    {
        tag: 'tui-tag',
        withAttrs: [],
        comment: 'tui-tag/tuiTag migrated to tuiChip. Check visuals and content manually',
    },
    {
        tag: 'button',
        withAttrs: ['tuiTag'],
        comment: 'tui-tag/tuiTag migrated to tuiChip. Check visuals and content manually',
    },
    {
        tag: 'tui-arrow',
        withAttrs: [],
        comment:
            'tui-arrow has been removed. Use TuiChevron directive from @taiga-ui/kit instead. See example https://taiga-ui.dev/components/data-list#links',
    },
    {
        tag: 'tui-svg',
        withAttrs: ['src'],
        filterFn: (element) => {
            const attr = findAttr(element.attrs, 'src');

            if (!attr) {
                return false;
            }

            // Dynamic binding: the runtime value cannot be verified statically
            if (attr.name === '[src]') {
                return true;
            }

            // Static value: icon names (@tui.x) and URLs/paths still resolve;
            // only raw inline SVG/SafeHtml no longer works with the icon input
            return attr.value.trim().startsWith('<');
        },
        comment:
            'tui-svg/src migrated to tui-icon/icon. The icon input expects an icon name (e.g. @tui.search) or an SVG URL; raw inline SVG is no longer supported - replace it with an icon name or URL',
    },
];
