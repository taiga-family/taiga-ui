export class InvalidDayException extends Error {
    constructor(day: number) {
        super(`Invalid day: ${day}`);
    }
}
