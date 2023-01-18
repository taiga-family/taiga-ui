export function tuiIsNumber(value: unknown): value is number {
    // eslint-disable-next-line @taiga-ui/no-typeof
    return typeof value === `number`;
}
