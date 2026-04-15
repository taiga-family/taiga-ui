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
        tag: 'tui-onboarding-flow',
        withAttrs: [],
        comment:
            'tui-onboarding-flow: In v5 action buttons must be moved OUT of individual <tui-onboarding-step> elements into a single shared <footer tuiFloatingContainer> as the last child of <tui-onboarding-flow>. Idiomatic v5 pattern: <tui-onboarding-flow [(index)]="index"><tui-onboarding-step *tuiItem>...</tui-onboarding-step><footer tuiFloatingContainer><button tuiButton (click)="index() < lastStep ? next() : observer.complete()">{{ index() < lastStep ? \'Next\' : \'Done\' }}</button></footer></tui-onboarding-flow>. Note: [index]="index()" (indexChange)="fn($event)" is backwards-compatible but [(index)]="index" (signal model) is the idiomatic v5 style. Also: mobile options changed from {fullscreen: true, appearance: \'onboarding\'} to {appearance: \'fullscreen onboarding\'}. See onboarding-flow documentation',
    },
];
