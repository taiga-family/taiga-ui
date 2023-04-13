export class TuiInvalidDayException extends Error {
    constructor(day: number) {
        super(ngDevMode ? `Invalid day: ${day}` : ``);
    }
}
