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
];
