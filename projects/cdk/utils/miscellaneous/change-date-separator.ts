/* internal */
export const changeDateSeparator = (
    dateString: string,
    newDateSeparator: string,
): string => dateString.replaceAll(/[^0-9A-Za-zА-Яа-я]/gi, newDateSeparator);
