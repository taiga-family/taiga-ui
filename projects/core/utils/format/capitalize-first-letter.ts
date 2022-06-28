/**
 * @deprecated: use {@link tuiCapitalizeFirstLetter} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function capitalizeFirstLetter(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

export const tuiCapitalizeFirstLetter = capitalizeFirstLetter;
