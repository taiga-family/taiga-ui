import type {TuiDateMode} from '@taiga-ui/cdk';

/**
 * Formatting configuration for displayed dates
 */
export interface TuiDateFormatSettings {
    /**
     * Date format mode.
     */
    readonly mode: TuiDateMode;
    /**
     * Separator between date segments
     * @example 10.02 ('.' by default)
     */
    readonly separator: string;
}
