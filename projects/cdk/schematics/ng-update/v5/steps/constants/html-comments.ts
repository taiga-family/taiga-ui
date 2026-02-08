import {TUI_THICKNESS_COMMENT} from '@taiga-ui/cdk/schematics/ng-update/v5/steps/migrate-css-variables';
import {hasElementAttribute} from '@taiga-ui/cdk/schematics/utils/templates/elements';

import {type HtmlComment} from '../../../interfaces';
import {hasChild} from '../../../utils/templates/dom-traversal';

export const HTML_COMMENTS: HtmlComment[] = [
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
        tag: 'tui-range',
        withAttrs: [
            '[style.--tui-thickness.rem]',
            '[style.--tui-thickness.px]',
            '[style.--tui-thickness]',
        ],
        comment: TUI_THICKNESS_COMMENT,
    },
    {
        tag: 'tui-input-range',
        withAttrs: [
            '[style.--tui-thickness.rem]',
            '[style.--tui-thickness.px]',
            '[style.--tui-thickness]',
        ],
        comment: TUI_THICKNESS_COMMENT,
    },
    {
        tag: 'input',
        withAttrs: [
            '[style.--tui-thickness.rem]',
            '[style.--tui-thickness.px]',
            '[style.--tui-thickness]',
        ],
        comment: TUI_THICKNESS_COMMENT,
        filterFn: (el) => hasElementAttribute(el, 'tuiSlider'),
    },
];
