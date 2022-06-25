/**
 * @deprecated: use {@link TuiInvalidMonthException}
 * TODO: remove in v3.0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export class InvalidMonthException extends Error {
    constructor(month: number) {
        super(`Invalid month: ${month}`);
    }
}

export class TuiInvalidMonthException extends InvalidMonthException {}
