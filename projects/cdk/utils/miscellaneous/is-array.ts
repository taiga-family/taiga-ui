export function tuiIsArray(value: any): value is readonly unknown[] {
    // See (Jul 7, 2017): https://github.com/microsoft/TypeScript/issues/17002
    return Array.isArray(value);
}
