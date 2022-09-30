export class TuiInvalidYearException extends Error {
    constructor(year: number) {
        super(`Invalid year: ${year}`);
    }
}
