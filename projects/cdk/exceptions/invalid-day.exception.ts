/**
 * @deprecated: use {@link TuiInvalidDayException}
 * TODO: remove in v3.0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export class InvalidDayException extends Error {
    constructor(day: number) {
        super(`Invalid day: ${day}`);
    }
}

export class TuiInvalidDayException extends InvalidDayException {}
