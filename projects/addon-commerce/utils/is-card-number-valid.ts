/**
 * Validates card number using Luhn algorithm
 */
export function isCardNumberValid(cardNumber: string): boolean {
    const {length} = cardNumber;
    const arr = cardNumber.split('').map((char, index) => {
        const digit = parseInt(char, 10);

        if ((index + length) % 2 === 0) {
            const digitX2 = digit * 2;

            return digitX2 > 9 ? digitX2 - 9 : digitX2;
        }

        return digit;
    });

    return !(arr.reduce((a, b) => a + b, 0) % 10);
}
