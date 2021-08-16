import {TuiPluralize} from '@taiga-ui/core/types';

// TODO: remove in 3.0

/**
 * Temporary util for mapping TuiPluralize array to ICU format
 */
export function tuiPluralizeToICU(pluralize: TuiPluralize): Record<string, string> {
    return {
        '=1': pluralize[0],
        '=2': pluralize[1],
        other: pluralize[2],
    };
}
