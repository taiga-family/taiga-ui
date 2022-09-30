export class TuiInvalidMonthException extends Error {
    constructor(month: number) {
        super(`Invalid month: ${month}`);
    }
}
