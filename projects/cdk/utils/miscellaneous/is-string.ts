export function tuiIsString(value: unknown): value is string {
    // eslint-disable-next-line @taiga-ui/no-typeof
    return typeof value === `string`;
}
