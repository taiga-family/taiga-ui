import {hasElementAttributeWithValue} from '../../../../utils/templates/elements';
import {type HtmlComment} from '../../../interfaces';
import {hasChild} from '../../../utils/templates/dom-traversal';
import {TUI_THICKNESS_COMMENT} from '../migrate-css-variables';

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
];
