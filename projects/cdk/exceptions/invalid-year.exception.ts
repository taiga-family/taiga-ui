/**
 * @deprecated: use {@link TuiInvalidYearException}
 * TODO: remove in v3.0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export class InvalidYearException extends Error {
    constructor(year: number) {
        super(`Invalid year: ${year}`);
    }
}

export class TuiInvalidYearException extends InvalidYearException {}
