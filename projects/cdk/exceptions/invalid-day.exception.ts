export class TuiInvalidDayException extends Error {
    constructor(day: number) {
        super(`Invalid day: ${day}`);
    }
}
