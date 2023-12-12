export function tuiIsNumber(value: unknown): value is number {
    return typeof value === `number`;
}
