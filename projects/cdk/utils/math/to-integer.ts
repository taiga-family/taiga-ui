export function tuiToInteger(value: number | string): number {
    return parseInt(value as unknown as string, 10);
}
