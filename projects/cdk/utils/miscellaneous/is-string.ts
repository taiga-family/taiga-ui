export function tuiIsString(value: unknown): value is string {
    // eslint-disable-next-line @taiga-ui/experience/no-typeof
    return typeof value === `string`;
}
