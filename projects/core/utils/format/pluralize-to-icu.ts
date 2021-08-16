import {TuiPluralize} from '@taiga-ui/core/types';

// TODO: remove in 3.0

/**
 * temporary util to map TuiPluralize array to ICU format
 */
export function tuiPluralizeToICU(pluralize: TuiPluralize): Record<string, string> {
    return {
        '=0': pluralize[1],
        '=1': pluralize[0],
        other: pluralize[2],
    };
}
