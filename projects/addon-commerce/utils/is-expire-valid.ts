import {tuiClamp} from '@taiga-ui/cdk';

export function tuiIsExpireValid(expire: string, today = new Date()): boolean {
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear() - 2000;
    const expireMonth = tuiClamp(parseInt(expire.slice(0, 2), 10), 1, 12);
    const expireYear = tuiClamp(parseInt(expire.slice(-2), 10), 0, 99);

    return (
        expireYear > currentYear ||
        (currentYear === expireYear && expireMonth >= currentMonth)
    );
}
