import {TuiPluralize} from '@taiga-ui/core/types';

// TODO: 3.0 remove in 3.0

/**
 * Temporary util for mapping TuiPluralize array to ICU format
 */
export function tuiPluralizeToICU(pluralize: TuiPluralize): Record<string, string> {
    return {
        one: pluralize[0],
        few: pluralize[1],
        many: pluralize[2],
        other: pluralize[2],
    };
}
