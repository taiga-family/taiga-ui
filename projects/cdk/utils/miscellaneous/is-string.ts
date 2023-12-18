export function tuiIsString(value: unknown): value is string {
    return typeof value === 'string';
}
