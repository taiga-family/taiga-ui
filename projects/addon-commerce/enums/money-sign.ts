/**
 * negative-only — show sign only for negative numbers
 * always — always show sign, except for zero
 * never — never show sign
 * force-negative — show minus no matter the number, except for zero
 * force-positive — show plus no matter the number, except for zero
 * ____
 * @deprecated use {@link TuiNumberFormatSettings} from '@taiga-ui/core':
 * ```ts
 * import {TuiNumberFormatSettings} from '@taiga-ui/core';
 * const yourVariable: TuiNumberFormatSettings['signMode'] = 'negative-only'
 * ```
 * @todo TODO delete in v3.0
 */
export const enum TuiMoneySign {
    NegativeOnly = 'negative-only',
    Always = 'always',
    Never = 'never',
    ForceNegative = 'force-negative',
    ForcePositive = 'force-positive',
}
