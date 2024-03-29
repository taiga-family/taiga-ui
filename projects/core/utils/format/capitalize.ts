/**
 * Capitalizes a given string, replacing it with a lowercase string and making
 * the first letter of each word uppercase.
 *
 * @param value the input string
 * @return the capitalized string
 */
export function tuiCapitalize(value: string): string {
    return value.toLowerCase().replaceAll(/(?:^|\s)\S/g, char => char.toUpperCase());
}
