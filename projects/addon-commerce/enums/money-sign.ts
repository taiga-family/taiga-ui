/**
 * negative-only — show sign only for negative numbers
 * always — always show sign, except for zero
 * never — never show sign
 * force-negative — show minus no matter the number, except for zero
 * force-positive — show plus no matter the number, except for zero
 * @deprecated use join type {@link TuiMoneySignT}
 * TODO: delete in v3.0
 */
export const enum TuiMoneySign {
    NegativeOnly = `negative-only`,
    Always = `always`,
    Never = `never`,
    ForceNegative = `force-negative`,
    ForcePositive = `force-positive`,
}
