export function tuiIsNumber(value: unknown): value is number {
    // eslint-disable-next-line @taiga-ui/experience/no-typeof
    return typeof value === `number`;
}
