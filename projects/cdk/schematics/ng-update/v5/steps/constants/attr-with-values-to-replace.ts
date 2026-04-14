import {
    hasElementAttribute,
    hasElementAttributeWithValue,
} from '../../../../utils/templates/elements';
import {type ReplacementAttributeValue} from '../../../interfaces';

function hasNoHintContent(el: Parameters<typeof hasElementAttribute>[0]): boolean {
    return !hasElementAttribute(el, 'tuiHintContent');
}

export const ATTR_WITH_VALUES_TO_REPLACE: ReplacementAttributeValue[] = [
    {
        attrNames: ['[pseudo]'],
        newAttrName: '[style.text-decoration-style]',
        valueReplacer: (value) =>
            value === 'true' ? "'dashed'" : `${value} ? 'dashed' : null`,
        withTagNames: ['a', 'button'],
        filterFn: (el) =>
            hasElementAttribute(el, 'tuiLink') &&
            el.attrs.find((attr) => attr.name === '[pseudo]')?.value !== 'false' &&
            hasElementAttributeWithValue(el, 'appearance', ''),
    },
    {
        attrNames: ['[pseudo]'],
        newAttrName: '[style.text-decoration-line]',
        valueReplacer: (value) =>
            value === 'true' ? "'underline'" : `${value} ? 'underline' : null`,
        withTagNames: ['a', 'button'],
        filterFn: (el) =>
            hasElementAttribute(el, 'tuiLink') &&
            el.attrs.find((attr) => attr.name === '[pseudo]')?.value !== 'false' &&
            !hasElementAttributeWithValue(el, 'appearance', ''),
    },
    {
        attrNames: ['size', '[size]'],
        newAttrName: '[style.--tui-thumb-size.rem]',
        valueReplacer: (condition) =>
            condition === 's' || condition === "'s'" ? '0.5' : '0.75',
        withTagNames: ['tui-range', 'input'],
        filterFn: (el) => el.tagName !== 'input' || hasElementAttribute(el, 'tuiSlider'),
    },
    {
        attrNames: ['tuiHintDirection'],
        filterFn: hasNoHintContent,
        valueReplacer: [
            {from: 'bottom-left', to: 'bottom-start'},
            {from: 'bottom-right', to: 'bottom-end'},
            {from: 'top-left', to: 'top-start'},
            {from: 'top-right', to: 'top-end'},
            {from: 'left-bottom', to: 'start-bottom'},
            {from: 'left-top', to: 'start-top'},
            {from: 'left', to: 'start'},
            {from: 'right-bottom', to: 'end-bottom'},
            {from: 'right-top', to: 'end-top'},
            {from: 'right', to: 'end'},
        ],
    },
    {
        attrNames: ['[tuiHintDirection]'],
        filterFn: hasNoHintContent,
        valueReplacer: [
            {from: "'bottom-left'", to: "'bottom-start'"},
            {from: "'bottom-right'", to: "'bottom-end'"},
            {from: "'top-left'", to: "'top-start'"},
            {from: "'top-right'", to: "'top-end'"},
            {from: "'left-bottom'", to: "'start-bottom'"},
            {from: "'left-top'", to: "'start-top'"},
            {from: "'left'", to: "'start'"},
            {from: "'right-bottom'", to: "'end-bottom'"},
            {from: "'right-top'", to: "'end-top'"},
            {from: "'right'", to: "'end'"},
        ],
    },
    {
        attrNames: ['tuiDropdownAlign', 'tuiSlot', 'tuiComment'],
        valueReplacer: [
            {from: 'left', to: 'start'},
            {from: 'right', to: 'end'},
        ],
    },
    {
        attrNames: ['[tuiDropdownAlign]', '[tuiSlot]', '[tuiComment]'],
        valueReplacer: [
            {from: "'left'", to: "'start'"},
            {from: "'right'", to: "'end'"},
        ],
    },
    {
        attrNames: ['direction'],
        withTagNames: ['tui-avatar-stack', 'tui-drawer'],
        valueReplacer: [
            {from: 'left', to: 'start'},
            {from: 'right', to: 'end'},
        ],
    },
    {
        attrNames: ['[direction]'],
        withTagNames: ['tui-avatar-stack', 'tui-drawer'],
        valueReplacer: [
            {from: "'left'", to: "'start'"},
            {from: "'right'", to: "'end'"},
        ],
    },
    {
        attrNames: ['vertical'],
        withTagNames: ['tui-tabs'],
        valueReplacer: [
            {from: 'left', to: 'start'},
            {from: 'right', to: 'end'},
        ],
    },
    {
        attrNames: ['[vertical]'],
        withTagNames: ['tui-tabs'],
        valueReplacer: [
            {from: "'left'", to: "'start'"},
            {from: "'right'", to: "'end'"},
        ],
    },
    {
        attrNames: ['vertical'],
        withTagNames: ['nav'],
        valueReplacer: [
            {from: 'left', to: 'start'},
            {from: 'right', to: 'end'},
        ],
        filterFn: (el) => hasElementAttribute(el, 'tuiTabs'),
    },
    {
        attrNames: ['[vertical]'],
        withTagNames: ['nav'],
        valueReplacer: [
            {from: "'left'", to: "'start'"},
            {from: "'right'", to: "'end'"},
        ],
        filterFn: (el) => hasElementAttribute(el, 'tuiTabs'),
    },
    {
        attrNames: ['align'],
        withTagNames: ['input'],
        valueReplacer: [
            {from: 'left', to: 'start'},
            {from: 'right', to: 'end'},
        ],
        filterFn: (el) => hasElementAttribute(el, 'tuiInputColor'),
    },
    {
        attrNames: ['[align]'],
        withTagNames: ['input'],
        valueReplacer: [
            {from: "'left'", to: "'start'"},
            {from: "'right'", to: "'end'"},
        ],
        filterFn: (el) => hasElementAttribute(el, 'tuiInputColor'),
    },
    {
        attrNames: ['tuiHeader'],
        valueReplacer: [
            {from: 'xxl', to: 'h1'},
            {from: 'xl', to: 'h2'},
            {from: 'l', to: 'h3'},
            {from: 'm', to: 'h4'},
            {from: 's', to: 'h5'},
            {from: 'xs', to: 'h6'},
            {from: 'xxs', to: 'body-l'},
        ],
    },
    {
        attrNames: ['[tuiHeader]'],
        valueReplacer: [
            {from: "'xxl'", to: "'h1'"},
            {from: "'xl'", to: "'h2'"},
            {from: "'l'", to: "'h3'"},
            {from: "'m'", to: "'h4'"},
            {from: "'s'", to: "'h5'"},
            {from: "'xs'", to: "'h6'"},
            {from: "'xxs'", to: "'body-l'"},
        ],
    },
    {
        attrNames: ['appearance'],
        valueReplacer: [
            {from: 'error', to: 'negative'},
            {from: 'success', to: 'positive'},
            {from: 'glass', to: 'secondary-grayscale'},
        ],
    },
    {
        attrNames: ['[appearance]'],
        valueReplacer: [
            {from: "'error'", to: "'negative'"},
            {from: "'success'", to: "'positive'"},
            {from: "'glass'", to: "'secondary-grayscale'"},
        ],
    },
    {
        attrNames: ['[directionOrder]'],
        newAttrName: '[direction]',
        withTagNames: ['table'],
        valueReplacer: (value) => {
            if (value === "'asc'") return '1';
            if (value === "'desc'") return '-1';

            return value;
        },
    },
];
