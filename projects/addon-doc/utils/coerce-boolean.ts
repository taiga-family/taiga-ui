export function tuiCoerceValueIsTrue(value?: boolean | string): boolean {
    return value?.toString() === `true`;
}
