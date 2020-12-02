/**
 * Преобразовывает строку, заменяя её на нижний регистр и делая первую букву каждого слова в верхнем регистре
 * @param value строка
 */
export function capitalize(value: string): string {
    return value.toLowerCase().replace(/(?:^|\s)\S/g, char => char.toUpperCase());
}
