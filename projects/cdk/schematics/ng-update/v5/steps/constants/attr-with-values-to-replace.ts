import {hasElementAttribute} from '../../../../utils/templates/elements';
import {type ReplacementAttributeValue} from '../../../interfaces';

export const ATTR_WITH_VALUES_TO_REPLACE: ReplacementAttributeValue[] = [
    {
        attrNames: ['[style.--tui-thickness.rem]'],
        newAttrName: '[style.--tui-thumb-size.rem]',
        valueReplacer: (condition) => `${Number(condition) * 2 + 0.25}`,
        withTagNames: ['tui-range', 'tui-input-range', 'input'],
        filterFn: (el) => {
            if (el.tagName === 'input') {
                return hasElementAttribute(el, 'tuiSlider');
            }

            return true;
        },
    },
    {
        attrNames: ['[style.--tui-thickness.px]'],
        newAttrName: '[style.--tui-thumb-size]',
        valueReplacer: (condition) => `calc(${condition}px * 2 + 0.25rem)`,
        withTagNames: ['tui-range', 'tui-input-range', 'input'],
        filterFn: (el) => {
            if (el.tagName === 'input') {
                return hasElementAttribute(el, 'tuiSlider');
            }

            return true;
        },
    },
];
