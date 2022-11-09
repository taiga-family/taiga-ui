export function tuiIsExpireValid(expire: string): boolean {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear() - 2000;
    // eslint-disable-next-line radix
    const month = parseInt(expire.slice(0, 2), 0);
    // eslint-disable-next-line radix
    const year = parseInt(expire.slice(-2), 0);

    return year > currentYear || (year === currentYear && month >= currentMonth);
}
