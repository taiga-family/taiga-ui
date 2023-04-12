export class TuiInvalidMonthException extends Error {
    constructor(month: number) {
        super(ngDevMode ? `Invalid month: ${month}` : ``);
    }
}
