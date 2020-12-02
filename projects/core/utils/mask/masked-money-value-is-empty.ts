export function maskedMoneyValueIsEmpty(value: string): boolean {
    switch (value) {
        case '':
        case '-':
        case ',':
        case '-,':
            return true;
        default:
            return false;
    }
}
