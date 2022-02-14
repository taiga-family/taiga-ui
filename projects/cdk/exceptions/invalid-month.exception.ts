export class InvalidMonthException extends Error {
    constructor(month: number) {
        super(`Invalid month: ${month}`);
    }
}
