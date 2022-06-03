/**
 * @deprecated use {@link TuiNumberFormatSettings} from '@taiga-ui/core':
 * ```ts
 * import {TuiNumberFormatSettings} from '@taiga-ui/core';
 * const yourVariable: TuiNumberFormatSettings['signMode'] = 'negative-only'
 * ```
 * @todo TODO delete in v3.0
 */
export type TuiMoneySignT =
    | 'negative-only'
    | 'always'
    | 'never'
    | 'force-negative'
    | 'force-positive';
