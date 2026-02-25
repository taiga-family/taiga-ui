import {hasElementAttribute} from '../../../../utils/templates/elements';
import {type ReplacementAttributeValue} from '../../../interfaces';

export const ATTR_WITH_VALUES_TO_REPLACE: ReplacementAttributeValue[] = [
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
];
