/**
 * Capitalizes a given string, replacing it with a lowercase string and making
 * the first letter of each word uppercase.
 *
 * @param value the input string
 * @return the capitalized string
 */
export function capitalize(value: string): string {
    return value.toLowerCase().replace(/(?:^|\s)\S/g, char => char.toUpperCase());
}
