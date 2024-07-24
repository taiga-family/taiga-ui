/**
 * @deprecated: drop in v5.0
 */
export function tuiCapitalizeFirstLetter(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
