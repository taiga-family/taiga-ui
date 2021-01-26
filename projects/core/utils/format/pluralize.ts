import {TuiPluralize} from '@taiga-ui/core/types';

/**
 * Selects the correct plural form to display.
 *
 * @param value the input number
 * @param args an array of three plural forms, e.g. ['год', 'года', 'лет']
 * @deprecated This implementation targets Russian.
 * Use https://angular.io/api/common/NgPlural for your implementations.
 */
export function pluralize(value: number, [one, few, many]: TuiPluralize): string {
    const ten = value % 10;
    const hundred = value % 100;

    // 1, 21, 101, 121, но не 11, 111, 211...
    if (ten === 1 && hundred !== 11) {
        return one;
    }

    // 2, 3, 4, 22, 33, 44, 152, 163, 174, но не 12, 13, 14, 112, 213, 314...
    if (ten >= 2 && ten <= 4 && (hundred < 10 || hundred >= 20)) {
        return few;
    }

    return many;
}
